export default function ContactSection() {
    return (
        <div className="relative bg-gray-900">
            <div className="lg:absolute lg:inset-0 lg:left-1/2">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80%22%22"
                    className="h-64 w-full bg-gray-800 object-cover sm:h-80 lg:absolute lg:h-full"
                />
            </div>

            <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
                <div className="px-6 lg:px-8">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                            Let's Work Together!
                        </h2>
                        <p className="mt-2 text-lg/8 text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illo
                            magnam. Sunt at voluptatem numquam obcaecati, repellendus aliquid
                            distinctio animi.
                        </p>
                        <form action="#" method="POST" className="mt-16">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm/6 font-semibold text-white">
                                        First Name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500
                                            "
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="last-name"
                                        className="block text-sm/6 font-semibold text-white">
                                        Last Name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="last-name"
                                            name="last-name"
                                            type="text"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500
                                            "
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="email"
                                        className="block-text-sm/6 font-semibold text-white">
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md bg-white/5 px-3.5
                                            py-2 text-base text-white outline outline-1
                                            -outline-offset-1 outline-white/10
                                            placeholder:text-gray-500 focus:outline focus:outline-2
                                            focus:-outline-offset-2 focus:outline-indigo-500 "
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="company"
                                        className="block-text-sm/6 font-semibold text-white">
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="company"
                                            name="email"
                                            type="text"
                                            autoComplete="organization"
                                            className="block w-full rounded-md bg-white/5 px-3.5
                                            py-2 text-base text-white outline outline-1
                                            -outline-offset-1 outline-white/10
                                            placeholder:text-gray-500 focus:outline focus:outline-2
                                            focus:-outline-offset-2 focus:outline-indigo-500 "
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <div className="flex justify-between text-sm/6">
                                        <label
                                            htmlFor="phone"
                                            className="block font-sembibold text-white"
                                            Optional>
                                            Phone
                                        </label>
                                        <p id="phone-description" className="text-gray-500">
                                            Optional
                                        </p>
                                    </div>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        autoComplete="tel"
                                        aria-describedby="phone-description"
                                        className="block w-full rounded-md bg-white/5 px-3.5
                                            py-2 text-base text-white outline outline-1
                                            -outline-offset-1 outline-white/10
                                            placeholder:text-gray-500 focus:outline focus:outline-2
                                            focus:-outline-offset-2 focus:outline-indigo-500 "
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <div className="flex justify-between text-sm/6">
                                    <label
                                        htmlFor="message"
                                        className="block text-sm/6 font-sembibold text-white">
                                        How Can We Help You?
                                    </label>
                                    <p id="message-description" className="text-gray -500">
                                        Max 500 Characters
                                    </p>
                                </div>
                                <div className="mt-2.5">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        aria-describedby="message-description"
                                        className="block w-full rounded-md bg-white/5 px-3.5
                                            py-2 text-base text-white outline outline-1
                                            -outline-offset-1 outline-white/10
                                            placeholder:text-gray-500 focus:outline focus:outline-2
                                            focus:-outline-offset-2 focus:outline-indigo-500 "
                                    />
                                </div>
                            </div>
                            <fieldset className="sm:col-span-2">
                                <legend ClassName="block text-sm/6 font-semibold text-white">
                                    Expected Budget
                                </legend>
                                <div className="mt-4 space-y-4 text-sm/6 text-gray-400">
                                    <div className="flex gap-x-2.5">
                                        <input
                                            defaultValue="under_25K"
                                            defaultCheckedid="budget-under-25K"
                                            name="budget"
                                            type="radio"
                                            className="relative mt-1 size-4 appearance-none rounded-full border border-gray-600 before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline indigo-500 disabled:border-white/10 disabled:bg-gray-800/50 disabled:before:bg-gray-600 forced-colors:appearance-auto forced-colors:before:hidden [&not(:checked)]:before:hidden"
                                        />
                                        <label htmlFor="budget-under-25K"></label>
                                    </div>
                                    <div className="flex gap-x-2.5">
                                        <input
                                            defaultValue="under_25K"
                                            defaultCheckedid="budget-under-25K"
                                            name="budget"
                                            type="radio"
                                            className="relative mt-1 size-4 appearance-none rounded-full border border-gray-600 before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline indigo-500 disabled:border-white/10 disabled:bg-gray-800/50 disabled:before:bg-gray-600 forced-colors:appearance-auto forced-colors:before:hidden [&not(:checked)]:before:hidden"
                                        />
                                        <label htmlFor="budget-under-25K">Less than 25K</label>
                                    </div>
                                    <div className="flex gap-x-2.5">
                                        <input
                                            defaultValue="under_25K"
                                            defaultCheckedid="budget-under-25K"
                                            name="budget"
                                            type="radio"
                                            className="relative mt-1 size-4 appearance-none rounded-full border border-gray-600 before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline indigo-500 disabled:border-white/10 disabled:bg-gray-800/50 disabled:before:bg-gray-600 forced-colors:appearance-auto forced-colors:before:hidden [&not(:checked)]:before:hidden"
                                        />
                                        <label htmlFor="budget-under-25K"></label>
                                    </div>
                                    <div className="flex gap-x-2.5">
                                        <input
                                            defaultValue="under_25K"
                                            defaultCheckedid="budget-under-25K"
                                            name="budget"
                                            type="radio"
                                            className="relative mt-1 size-4 appearance-none rounded-full border border-gray-600 before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline indigo-500 disabled:border-white/10 disabled:bg-gray-800/50 disabled:before:bg-gray-600 forced-colors:appearance-auto forced-colors:before:hidden [&not(:checked)]:before:hidden"
                                        />
                                        <label htmlFor="budget-under-25K"></label>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
