import "@/style/globals.css";
export const metadata = {
  title: "resome",
  description: "이민재의 기술 블로그 및 자기소개서 포트폴리오입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
