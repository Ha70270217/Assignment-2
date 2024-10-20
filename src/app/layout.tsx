import "./globals.css";
type MainLayout = {
  children:React.ReactNode
}

const MainLayout:React.FC <MainLayout> = (props) => {
  console.log(props, "prop");
  return(
    <html lang="en">
      <body>(props.children)</body>
     </html>
  )

}

export default function rootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
{children}
      </body>
    </html>
  );
}
