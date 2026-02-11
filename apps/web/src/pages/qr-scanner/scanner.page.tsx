import QRScanner from '../../components/QRScanner';
import useTitle from '../../hooks/useTitle';

const ScannerPage = () => {
  useTitle('QR Scanner');
  return <QRScanner />;
};

export default ScannerPage;
