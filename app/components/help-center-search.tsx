import { Label, TextInput } from "flowbite-react";
import { HiSearch } from "react-icons/hi";
import type { FC } from "react";

const SearchBarWithLinksFAQSection: FC = function () {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-16">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            How can we help you?
          </h2>
          <p className="mb-8 text-gray-500 dark:text-gray-400 sm:text-xl">
            Here are a few of the questions we get the most. If you don't see
            what's on your mind, reach out to us anytime on phone, chat, or
            email.
          </p>
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <TextInput
            icon={HiSearch}
            id="search"
            placeholder="Type keywords to find answers"
            className="[&_input]:p-4 [&_input]:text-base [&_input]:!pl-12 [&_svg]:h-6 [&_svg]:w-6"
          />
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            You can also browse the topics below to find what you are looking
            for.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold dark:text-white">General</h3>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline">
                  How to update
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to change the language
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About forwarding limits
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to update Flowbite
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold dark:text-white">Android</h3>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline">
                  Verifying your number
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to restore your chat history
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to manage your notifications
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Account &amp; Profile
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold dark:text-white">Iphone</h3>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline">
                  How to restore your chat history
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to use status
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to manage your notifications
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Can’t log out
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold dark:text-white">
              Web &amp; Desktop
            </h3>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline">
                  About WhatsApp Web and Desktop
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to log in or out
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to manage your notifications
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to update Flowbite
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBarWithLinksFAQSection;
