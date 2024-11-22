// import { useQuery } from "@tanstack/react-query";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  // const { data: authUser, isLoading } = useQuery({ queryKey: ["authUser"] });
  // console.log("Auth user is in layout", authUser);
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>
    </div>
  );
};

export default Layout;
