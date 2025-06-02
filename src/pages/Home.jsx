export  default function Home() {
  return (
      <div className="bg-gray-50">
          <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
              <div className="relative max-lg:row-start-1">
                  <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                      <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                          <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Paste your text</p>
                          <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">

                          </p>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 pt-10 pb-6 sm:px-10 lg:pb-4">
                          <textarea className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-500 sm:text-sm/6"
                                    id="pasted_text" name="pasted_text" rows={4} placeholder="..." defaultValue={''}/>
                          <button type="submit" className="mt-2 inline-block rounded-lg bg-amber-500 px-6 py-2 text-white hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 transition">
                              Save
                          </button>
                      </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-4xl"></div>
              </div>
          </div>
          <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
              <div className="mt-10 grid gap-4 sm:mt-16 lg:max-w-7xl lg:grid-rows-2">
                  <div className="relative lg:row-span-2">
                      <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl"></div>
                      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                          <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                              <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                  Paste your code
                              </p>
                              <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                  already have a code? paste here!
                              </p>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 pt-10 pb-6 sm:px-10 lg:pb-4">
                          <input className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-500 sm:text-sm/6"
                                    id="pasted_text" name="pasted_text" placeholder="..." defaultValue={''}/>
                              <button type="submit" className="mt-2 inline-block rounded-lg bg-amber-500 px-6 py-2 text-white hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 transition">
                                  Save
                              </button>
                          </div>
                      </div>
                      <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
                  </div>
              </div>
          </div>
      </div>
  )
}