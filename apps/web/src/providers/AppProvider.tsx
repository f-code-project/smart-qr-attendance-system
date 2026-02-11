import { BrowserRouter } from 'react-router';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    // <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      {/* <AuthProvider> */}
      {/* Bạn có thể thêm ToastProvider, ThemeProvider ở đây */}
      {children}
      {/* </AuthProvider> */}
    </BrowserRouter>
    // </QueryClientProvider>
  );
};
