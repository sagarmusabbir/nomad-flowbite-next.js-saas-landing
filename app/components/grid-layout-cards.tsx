import { Avatar } from "flowbite-react";
import type { FC } from "react";

const GridLayoutTestimonialCards: FC = function () {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-md text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Testimonials
          </h2>
          <p className="mb-8 text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-6">
            <figure className="rounded bg-gray-50 p-6 dark:bg-gray-800">
              <blockquote className="text-sm text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Solid foundation for any project
                </h3>
                <p className="my-4">
                  "This is a very complex and beautiful set of elements. Under
                  the hood it comes with the best things from 2 different
                  worlds: Figma and Tailwind.”
                </p>
              </blockquote>
              <figcaption className="flex items-center space-x-3">
                <Avatar
                  img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                  rounded
                  size="sm"
                >
                  <div className="space-y-0.5 font-medium dark:text-white">
                    <div>Bonnie Green</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      CTO at Open AI
                    </div>
                  </div>
                </Avatar>
              </figcaption>
            </figure>
            <figure className="rounded bg-gray-50 p-6 dark:bg-gray-800">
              <blockquote className="text-sm text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  A must-have for designers
                </h3>
                <p className="my-4">
                  "This is a very complex and beautiful set of elements. Under
                  the hood it comes with the best things from 2 different
                  worlds: Figma and Tailwind.”
                </p>
              </blockquote>
              <figcaption className="flex items-center space-x-3">
                <Avatar
                  img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  rounded
                  size="sm"
                >
                  <div className="space-y-0.5 font-medium dark:text-white">
                    <div>Lana Byrd</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Software Engineer at Tesla
                    </div>
                  </div>
                </Avatar>
              </figcaption>
            </figure>
            <figure className="rounded bg-gray-50 p-6 dark:bg-gray-800">
              <blockquote className="text-sm text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Speechless with how easy this was to integrate
                </h3>
                <p className="my-4">
                  "I recently got my hands on Flowbite Pro, and holy crap, I'm
                  speechless with how easy this was to integrate within my
                  application. Most templates are a pain, code is scattered, and
                  near impossible to theme."
                </p>
              </blockquote>
              <figcaption className="flex items-center space-x-3">
                <Avatar
                  img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  rounded
                  size="sm"
                >
                  <div className="space-y-0.5 font-medium dark:text-white">
                    <div>Jese Leos</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      CEO at Oracle
                    </div>
                  </div>
                </Avatar>
              </figcaption>
            </figure>
          </div>
          <div className="space-y-6">
            <figure className="rounded bg-gray-50 p-6 dark:bg-gray-800">
              <blockquote className="text-sm text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Efficient Collaborating
                </h3>
                <p className="my-4">
                  "Flowbite is just awesome. It contains tons of predesigned
                  components and pages starting from login screen to complex
                  dashboard. Perfect choice for your next SaaS application.”
                </p>
              </blockquote>
              <figcaption className="flex items-center space-x-3">
                <Avatar
                  img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                  rounded
                  size="sm"
                >
                  <div className="space-y-0.5 font-medium dark:text-white">
                    <div>Joseph McFall</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Junior Designer at Adobe
                    </div>
                  </div>
                </Avatar>
              </figcaption>
            </figure>
            <figure className="rounded bg-gray-50 p-6 dark:bg-gray-800">
              <blockquote className="text-sm text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Mindblowing workflow and variants
                </h3>
                <p className="my-4">
                  "Flowbite provides a robust set of design tokens and
                  components based on the popular Tailwind CSS framework.
                </p>
                <p className="my-4">
                  From the most used UI components like forms and navigation
                  bars to the whole app screens designed both for desktop and
                  mobile, this UI kit provides a solid foundation for any
                  project.”
                </p>
              </blockquote>
              <figcaption className="flex items-center space-x-3">
                <Avatar
                  img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                  rounded
                  size="sm"
                >
                  <div className="space-y-0.5 font-medium dark:text-white">
                    <div>Helene Engels</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      CFO at Microsoft
                    </div>
                  </div>
                </Avatar>
              </figcaption>
            </figure>
            <figure className="rounded bg-gray-50 p-6 dark:bg-gray-800">
              <blockquote className="text-sm text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Perfect choice for a SaaS application
                </h3>
                <p className="my-4">
                  "Flowbite provides a robust set of design tokens and
                  components based on the popular Tailwind CSS framework.
                </p>
                <p className="my-4">
                  From the most used UI components like forms and navigation
                  bars to the whole app screens designed both for desktop and
                  mobile, this UI kit provides a solid foundation for any
                  project.”
                </p>
              </blockquote>
              <figcaption className="flex items-center space-x-3">
                <Avatar
                  img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                  rounded
                  size="sm"
                >
                  <div className="space-y-0.5 font-medium dark:text-white">
                    <div>Leslie Livingston</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Creative Director at Apple
                    </div>
                  </div>
                </Avatar>
              </figcaption>
            </figure>
          </div>
          <div className="space-y-6">
            <figure className="rounded bg-gray-50 p-6 dark:bg-gray-800">
              <blockquote className="text-sm text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Solid foundation for any project
                </h3>
                <p className="my-4">
                  "I recently got my hands on Flowbite Pro, and holy crap, I'm
                  speechless with how easy this was to integrate within my
                  application. Most templates are a pain, code is scattered, and
                  near impossible to theme."
                </p>
              </blockquote>
              <figcaption className="flex items-center space-x-3">
                <Avatar
                  img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  rounded
                  size="sm"
                >
                  <div className="space-y-0.5 font-medium dark:text-white">
                    <div>Michael Gough</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Front-end engineer at Meta
                    </div>
                  </div>
                </Avatar>
              </figcaption>
            </figure>
            <figure className="rounded bg-gray-50 p-6 dark:bg-gray-800">
              <blockquote className="text-sm text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Mindblowing workflow and variants
                </h3>
                <p className="my-4">
                  "Flowbite is just awesome. It contains tons of predesigned
                  components and pages starting from login screen to complex
                  dashboard. Perfect choice for your next SaaS application.”
                </p>
              </blockquote>
              <figcaption className="flex items-center space-x-3">
                <Avatar
                  img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png"
                  rounded
                  size="sm"
                >
                  <div className="space-y-0.5 font-medium dark:text-white">
                    <div>Neil Sims</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Software architect at Amazon
                    </div>
                  </div>
                </Avatar>
              </figcaption>
            </figure>
            <figure className="rounded bg-gray-50 p-6 dark:bg-gray-800">
              <blockquote className="text-sm text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Speechless with how easy this was to integrate
                </h3>
                <p className="my-4">
                  "This is a very complex and beautiful set of elements. Under
                  the hood it comes with the best things from 2 different
                  worlds: Figma and Tailwind.”
                </p>
              </blockquote>
              <figcaption className="flex items-center space-x-3">
                <Avatar
                  img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
                  rounded
                  size="sm"
                >
                  <div className="space-y-0.5 font-medium dark:text-white">
                    <div>Robert Brown</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Junior developer at SAP
                    </div>
                  </div>
                </Avatar>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridLayoutTestimonialCards;
