import { Button, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import type { FC } from "react";

const DefaultNewsletterSection: FC = function () {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Sign up for our newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400 sm:text-xl md:mb-12">
            Stay up to date with the roadmap progress, announcements and
            exclusive discounts feel free to sign up with your email.
          </p>
          <form action="#">
            <div className="mx-auto mb-3 max-w-screen-sm items-center space-y-4 sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label
                  htmlFor="email"
                  className="mb-2 hidden text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email address
                </label>
                <TextInput
                  id="email"
                  icon={HiMail}
                  placeholder="Enter your email"
                  required
                  type="email"
                  className="md:[&_input]:rounded-r-none"
                />
              </div>
              <div>
                <Button
                  color="info"
                  type="submit"
                  className="w-full md:w-fit md:rounded-l-none"
                >
                  Subscribe
                </Button>
              </div>
            </div>
            <div className="newsletter-form-footer mx-auto max-w-screen-sm text-left text-sm text-gray-500 dark:text-gray-300">
              We care about the protection of your data.&nbsp;
              <a
                href="#"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Read our Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DefaultNewsletterSection;
