import { isAuthenticated } from "@/lib/auth-server"
import { redirect } from "next/navigation"

const Page = async () => {
  // const session = await isAuthenticated()
  // if (!session) {
  //   redirect("/login")
  // }
  return (
    <div>Dashboard</div>
  )
}

export default Page