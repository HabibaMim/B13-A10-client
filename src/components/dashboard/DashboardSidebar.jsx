
import { Bars, Heart, ClipboardIcon, Bell, Envelope, Gear, House, Magnifier, Person, Plus, Calendar, Persons, CreditCard } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import logo from "../../../public/assets/logo.png";
import Image from "next/image";
import { ChartColumn } from "lucide-react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

export default async function DashboardSidebar() {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    const user = session?.user
    const role = user?.role || 'tenant'
    //console.log(user)

    const dashboardItems ={
        owner: [{ icon: ChartColumn, label: "Home" , link:'/dashboard/owner'},
            { icon: Plus, label: "Add Property" , link:'/dashboard/owner/add-property'},
            { icon: House, label: "My Properties" , link:'/dashboard/owner/my-properties' },
            { icon: Calendar, label: "Booking Requests" , link:'/dashboard/owner/booking-requests' },
            { icon: Person, label: "Profile" , link:'/dashboard/my-profile' },
        ],

        tenant: [{ icon: Calendar, label: "My Bookings" , link:'/dashboard/tenant'},
            { icon: Heart, label: "Favorites" , link:'/dashboard/tenant/favorites'},
            { icon: Person, label: "Profile" , link:'/dashboard/my-profile' },
        ],

         admin: [{ icon: Persons, label: "All Users" , link:'/dashboard/admin/all-users'},
            { icon: House, label: "All Properties" , link:'/dashboard/admin/all-properties'},
            { icon: Calendar, label: "All Bookings" , link:'/dashboard/admin/all-bookings' },
            { icon: CreditCard, label: "Transactions" , link:'/dashboard/admin/transactions' },
            { icon: Person, label: "Profile" , link:'/dashboard/my-profile' },
        ],
    }

  const navItems = dashboardItems[role]
  //console.log(navItems)


  return (

    <Drawer>

      <Button 
        className="block sm:hidden bg-violet-500 hover:bg-violet-600 text-white border-none"
      >
        <Bars />
        Menu
      </Button>



      <nav className="sm:flex hidden flex-col gap-3 bg-base-300 min-h-screen w-64 p-5 border-r border-violet-400/20">


        <div className="flex justify-center mb-6">

         <Link href='/'>
          <Image
            src={logo}
            className="h-[65px] w-[85px] object-contain"
            alt="logo"
          /></Link>

        </div>



        {navItems.map((item) => (

       <Link key={item.label} href={item.link}>
          <button

            

            className="
            flex items-center gap-3 
            rounded-xl 
            px-4 
            py-3 
            text-sm 
            font-medium
            text-violet-200
            transition-all
            hover:bg-violet-500/20
            hover:text-white
            "

            type="button"

          >

            <item.icon className="size-5 text-violet-300" />

            {item.label}

          </button>
       </Link>

        ))}


      </nav>





      <Drawer.Backdrop>


        <Drawer.Content placement="left">


          <Drawer.Dialog className="bg-base-300 text-white">


            <Drawer.CloseTrigger />


            <Drawer.Header>

              <Drawer.Heading className="text-violet-300">
                Navigation
              </Drawer.Heading>

            </Drawer.Header>




            <Drawer.Body>


              <nav className="flex flex-col gap-3">


                {navItems.map((item) => (

              <Link   key={item.label} href={item.link}>
                  <button

                  

                    className="
                    flex items-center gap-3
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-violet-200
                    transition-all
                    hover:bg-violet-500/20
                    hover:text-white
                    "

                    type="button"

                  >

                    <item.icon className="size-5 text-violet-300" />

                    {item.label}


                  </button>

              </Link>

                ))}


              </nav>


            </Drawer.Body>


          </Drawer.Dialog>


        </Drawer.Content>


      </Drawer.Backdrop>


    </Drawer>

  );

}