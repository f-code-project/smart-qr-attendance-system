import QrScanner from 'qr-scanner';
import React, { useEffect, useRef, useState } from 'react';

const QRScanner: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scannerRef = useRef<QrScanner | null>(null);
  const [result, setResult] = useState<string>('');
  const isLocked = useRef(false);

  useEffect(() => {
    const videoElem = videoRef.current;
    if (!videoElem) return;

    // KHỞI TẠO CẤU HÌNH TỐI ƯU CHO QR CODE XANH LÁ
    // eslint-disable-next-line react-hooks/immutability
    scannerRef.current = new QrScanner(videoElem, (res) => handleScan(res), {
      // 1. Tăng tốc độ quét lên tối đa
      maxScansPerSecond: 30,
      preferredCamera: 'environment',
      highlightScanRegion: true,
      highlightCodeOutline: true,
      returnDetailedScanResult: true,

      // 2. TĂNG VÙNG QUÉT LÊN 85% (từ 70%) - bao phủ toàn bộ QR code tốt hơn
      calculateScanRegion: (v) => {
        const smallestDim = Math.min(v.videoWidth, v.videoHeight);
        const scanRegionSize = Math.round(smallestDim * 0.85); // Tăng lên 85%
        return {
          x: Math.round((v.videoWidth - scanRegionSize) / 2),
          y: Math.round((v.videoHeight - scanRegionSize) / 2),
          width: scanRegionSize,
          height: scanRegionSize,
        };
      },
    });

    // 3. TỐI ƯU HÓA CHO MÀU XANH #5EB577 (RGB: 94, 181, 119)
    // Công thức: Tăng trọng số Red và Blue, GIỮ Green ở mức trung bình
    // Để màu xanh lá chuyển thành xám đậm rõ ràng hơn
    scannerRef.current.setGrayscaleWeights(100, 50, 100);

    // 4. CHỈ QUÉT CHẾ ĐỘ BÌNH THƯỜNG (không cần inverted)
    // QR code xanh lá trên nền trắng không cần inverted mode
    scannerRef.current.setInversionMode('original');

    scannerRef.current.start().catch((e) => console.error(e));

    return () => {
      scannerRef.current?.destroy();
      scannerRef.current = null;
    };
  }, []);

  const handleScan = (res: QrScanner.ScanResult) => {
    if (isLocked.current || !res.data) return;

    isLocked.current = true;
    setResult(res.data);


    if (navigator.vibrate) {
      navigator.vibrate(200);
    }


    setTimeout(() => {
      setResult('');
      isLocked.current = false;
    }, 2000);
  };

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {/* Video background */}
      <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover"></video>

      {/* Gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none"></div>

      {/* Header with F-Code Logo */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 to-transparent pt-8 pb-12">
        <div className="flex flex-col items-center gap-3">
          {/* F-Code Logo */}
          <div className="flex items-center gap-4">
            <div className="relative">
              {/* Logo background glow */}
              <div className="absolute inset-0 bg-green-500/40 blur-2xl rounded-full scale-150"></div>
              <div className="relative bg-white/10 backdrop-blur-md p-2 rounded-2xl shadow-2xl border border-white/20">
                <img src="/images/fcode.png" alt="F-Code Logo" className="w-14 h-14 object-contain" />
              </div>
            </div>
            <div className="text-left">
              <h1 className="text-3xl font-bold text-white tracking-tight drop-shadow-lg">F-Code</h1>
              <p className="text-green-400 text-sm font-medium">QR Attendance System</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main scanning area */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
        {/* Scan frame with animation */}
        <div className="relative">
          {/* Animated corner borders */}
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            {/* Border frame only - NO background blur for clarity */}
            <div className="absolute inset-0 border-2 border-white/30 rounded-3xl"></div>

            {/* Animated scanning line */}
            {!result && (
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-scan-line shadow-lg shadow-green-500/50"></div>
              </div>
            )}

            {/* Corner decorations */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-green-400 rounded-tl-2xl animate-pulse"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-green-400 rounded-tr-2xl animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-green-400 rounded-bl-2xl animate-pulse"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-green-400 rounded-br-2xl animate-pulse"></div>

            {/* Success indicator */}
            {result && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-green-500 rounded-full p-4 animate-bounce-in">
                  <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            )}
          </div>

          {/* Instruction text */}
          <div className="mt-8 text-center space-y-3">
            <div
              className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-300 ${
                result
                  ? 'bg-green-500 shadow-lg shadow-green-500/50 scale-105'
                  : 'bg-black/60 backdrop-blur-md border border-white/20'
              }`}
            >
              {result ? (
                <>
                  <svg className="w-6 h-6 text-white animate-spin-slow" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white font-bold text-lg">ĐÃ QUÉT THÀNH CÔNG!</span>
                </>
              ) : (
                <>
                  <div className="relative">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-ping absolute"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-white font-semibold text-base">Đang tìm mã QR...</span>
                </>
              )}
            </div>

            {result && (
              <div className="animate-fade-in bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 max-w-md mx-auto">
                <p className="text-xs text-gray-300 mb-1">Kết quả:</p>
                <p className="text-white font-mono text-sm break-all">{result}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer instructions */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent pt-12 pb-8">
        <div className="text-center space-y-2 px-4">
          <p className="text-white/90 font-medium">📱 Đặt mã QR vào giữa khung</p>
          <p className="text-white/60 text-sm">Hệ thống sẽ tự động quét và điểm danh</p>
        </div>
      </div>

      <style>{`
        @keyframes scan-line {
          0% {
            top: 0;
          }
          50% {
            top: 100%;
          }
          100% {
            top: 0;
          }
        }
        
        @keyframes bounce-in {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-scan-line {
          animation: scan-line 2s ease-in-out infinite;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default QRScanner;
