import { Disclosure} from '@headlessui/react'
import { NavLink } from 'react-router-dom'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Random', href: '/random/', current: false },
  { name: 'Categories', href: '/categories/', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 justify-center sm:items-stretch sm:justify-start ">
                <div className="flex flex-shrink-0 items-center">
                    <h3 className='text-white m-0 '>QuizHub</h3>
                </div>
                <div className="hidden sm:ml-6 sm:block ">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({isActive})=> 
                        `${isActive ? "bg-gray-900 text-white" : "text-gray-300" } hover:bg-gray-700 hover:text-white
                        rounded-md px-3 py-2 text-sm font-medium`
                      }
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>


        </>
      )}
    </Disclosure>
  )
}
