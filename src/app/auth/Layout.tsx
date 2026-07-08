import LoginPage from "./login/page";
import { createClient } from "@/lib/supabase";
import { redirect } from "next/navigation";

const Layout = async () => {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
        redirect("/admin");
    }
    return <LoginPage />;
}

export default Layout