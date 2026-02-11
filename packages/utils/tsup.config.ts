import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'], // Xuất ra cả 2 định dạng cho React (esm) và Node (cjs)
  dts: true, // Tự động tạo file định nghĩa .d.ts
  splitting: false,
  sourcemap: true,
  clean: true, // Xóa folder dist trước khi build
  minify: true, // Nén code
});
