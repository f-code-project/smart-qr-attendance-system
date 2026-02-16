import { CheckCircle, LoaderCircle, Zap } from 'lucide-react';
import QrScanner from 'qr-scanner';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { useNotificationSound } from '../hooks/useNotificationSound';
import Base64Utils from '../utils/base64';

const QRScanner: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log(`id: ${id}`);

  const { playSound: playTingSound } = useNotificationSound(`tingting.mp3`, false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scannerRef = useRef<QrScanner | null>(null);
  const [result, setResult] = useState<string>('');
  const [isFlashOn, setIsFlashOn] = useState(false);
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

      // 2. VÙNG QUÉT 65% - Yêu cầu để điện thoại ra xa hơn để quét tốt hơn
      calculateScanRegion: (v) => {
        const smallestDim = Math.min(v.videoWidth, v.videoHeight);
        const scanRegionSize = Math.round(smallestDim * 0.65); // Giảm xuống 65% để quét từ xa hơn
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

  const toggleFlash = async () => {
    if (!scannerRef.current) return;

    try {
      if (isFlashOn) {
        await scannerRef.current.turnFlashOff();
        setIsFlashOn(false);
      } else {
        await scannerRef.current.turnFlashOn();
        setIsFlashOn(true);
      }
    } catch (error) {
      console.error('Flash toggle error:', error);
    }
  };

  const handleScan = (res: QrScanner.ScanResult) => {
    if (isLocked.current || !res.data) return;

    isLocked.current = true;
    setResult(res.data);
    playTingSound();
    // playSound();
    const [, studentCode] = Base64Utils.decodeBase64(res.data).split('|');
    // alert(`Mã sinh viên: ${studentCode}`);
    const sound = new Howl({
      src: [`/musics/${studentCode ?? 'SE200947'}.mp3`],
      volume: 1.0,
      loop: false,
    });
    sound.play();

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
      <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover"></video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none"></div>

      <Header toggleFlash={toggleFlash} isFlashOn={isFlashOn} />

      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <div className="flex flex-col items-center">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
            <div className="absolute inset-0 border-2 sm:border-3 md:border-4 border-white rounded-2xl sm:rounded-3xl"></div>

            {!result && (
              <div className="absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl">
                <div className="absolute left-0 right-0 h-0.5 sm:h-1 bg-green-400 animate-scan-line"></div>
              </div>
            )}

            <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-t-[4px] border-l-[4px] sm:border-t-[5px] sm:border-l-[5px] md:border-t-[6px] md:border-l-[6px] border-green-400 rounded-tl-xl sm:rounded-tl-2xl"></div>
            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-t-[4px] border-r-[4px] sm:border-t-[5px] sm:border-r-[5px] md:border-t-[6px] md:border-r-[6px] border-green-400 rounded-tr-xl sm:rounded-tr-2xl"></div>
            <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-b-[4px] border-l-[4px] sm:border-b-[5px] sm:border-l-[5px] md:border-b-[6px] md:border-l-[6px] border-green-400 rounded-bl-xl sm:rounded-bl-2xl"></div>
            <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-b-[4px] border-r-[4px] sm:border-b-[5px] sm:border-r-[5px] md:border-b-[6px] md:border-r-[6px] border-green-400 rounded-br-xl sm:rounded-br-2xl"></div>

            {result && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-green-500 rounded-full p-3 sm:p-4 animate-bounce-in">
                  <CheckCircle className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" />
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 sm:mt-8 text-center flex flex-col">
            <div
              className={`inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl transition-all ${
                result ? 'bg-green-500' : 'bg-black/50 border border-white/30'
              }`}
            >
              {result ? (
                <>
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  <span className="text-white font-bold text-sm sm:text-base">Xác thực thành công!</span>
                </>
              ) : (
                <>
                  <LoaderCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 animate-spin" />
                  <span className="text-white font-medium text-sm sm:text-base">Đang tìm mã QR...</span>
                </>
              )}
            </div>
            <span className="text-white text-xs font-semibold mt-2">Quét cách mã QR 20 - 50 cm</span>
          </div>
        </div>
      </div>
      <Author />
    </div>
  );
};
const Header = ({ toggleFlash, isFlashOn }: { toggleFlash: () => void; isFlashOn: boolean }) => {
  return (
    <div className="relative z-20 bg-gradient-to-b from-black/80 to-transparent px-4 sm:px-6 pt-4 sm:pt-6 md:pt-8 pb-6 sm:pb-8 md:pb-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="relative">
            <div className="absolute inset-0 bg-green-500/40 blur-2xl rounded-full scale-150"></div>
            <div className="relative bg-white backdrop-blur-md p-2 rounded-2xl shadow-2xl border border-white/20">
              <img src="/images/fcode.png" alt="F-Code Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
            </div>
          </div>
          <div className="text-left">
            <h1 className="text-xl sm:text-2xl  font-bold text-white tracking-tight drop-shadow-lg">F-Code</h1>
            <p className="text-green-400 text-xs font-medium">Code the dream</p>
          </div>
        </div>

        <button
          onClick={toggleFlash}
          className={`p-3 sm:p-3 rounded-xl sm:rounded-2xl backdrop-blur-md transition-all shadow-lg ${
            isFlashOn
              ? 'bg-yellow-500/90 border-2 border-yellow-300 shadow-yellow-500/50'
              : 'bg-white/10 border-2 border-white/20 hover:bg-white/20'
          }`}
        >
          <Zap className={`w-5 h-5 sm:w-6 sm:h-6 ${isFlashOn ? 'text-white fill-white' : 'text-white/80'}`} />
        </button>
      </div>
    </div>
  );
};
const Author = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent pt-12 pb-8">
      <div className="text-center space-y-2 px-4">
        <p className="text-white/90 font-medium">Phần mềm điểm danh F-Code</p>
        <p className="text-white/60 text-sm">Phát triển: Phạm Hoàng Tuấn</p>
      </div>
    </div>
  );
};
export default QRScanner;
