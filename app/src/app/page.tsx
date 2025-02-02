import { Icons } from "@/Component/Icon";
import MaxWidthWrapper from "@/Component/MaxWidthWrapper";
import Phone from "@/Component/Phone";
import { ArrowRight, Check, Star } from "lucide-react";
import Image from "next/image";
import Reviews from '@/Component/Reviews'
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";



export default function Home() {
  return (
    <>
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-14 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-6 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image src="/snake-1.png" width={110} height={110} alt="Snake Img" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">Your Image on a <span className="bg-green-600 px-2 text-white">Custome</span> Phone Case</h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture you favourite memories with your own , <span className="font-semibold">one-of-one</span> Phone case. 
                CaseCobra allows you to protect your memories not just your phone case. 
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-600"/>
                    High-Ouality durable Material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-600"/>
                    5 years print guarntee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-600"/>
                    Modern iPhone Model Supported
                  </li>
                </div>

              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <Image width={45} height={45} className="inline-block  rounded-full ring-2 ring-slate-100" src="/users/user-1.png" alt="user img" />
                  <Image width={45} height={45} className="inline-block  rounded-full ring-2 ring-slate-100" src="/users/user-2.png" alt="user img" />
                  <Image width={45} height={45} className="inline-block  rounded-full ring-2 ring-slate-100" src="/users/user-3.png" alt="user img" />
                  <Image width={45} height={45} className="inline-block  rounded-full ring-2 ring-slate-100" src="/users/user-4.jpg" alt="user img" />
                  <Image width={45} height={45} className="inline-block  rounded-full ring-2 ring-slate-100 object-cover" src="/users/user-5.jpg" alt="user img" />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                    <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                    <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                    <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                    <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                  </div>
                  <p><span className="font-semibold">1.250</span>happy customer</p>

                </div>
              </div>
            </div>

          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <Image width={40} height={40} src="/your-image.png" alt="img" className="absolute  lg:w-52 left-31 -top-40 select-none hidden  sm:block lg:hidden xl:block" />
              <Image width={50} height={40} src="/line.png" alt="img" className="absolute  -left-6 -bottom-6 select-none"/>
              <Phone
  className="w-64 aspect-[9/19]" // Ensures the correct aspect ratio for the phone
  imgSrc="/testimonial/1.jpg"
/>

            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* value propsition section */}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16  sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">What Our <span className="relative px-2">customer <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500"/></span>{' '}  Says</h2>
            <Image width={80} height={80} className="order-0 lg:order-2" alt="img" src='/snake-2.png'/>

          </div>

          <div className="mx-auto max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            {/* One review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-8">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600"/>
                <Star className="h-5 w-5 text-green-600 fill-green-600"/>
                <Star className="h-5 w-5 text-green-600 fill-green-600"/>
                <Star className="h-5 w-5 text-green-600 fill-green-600"/>
                <Star className="h-5 w-5 text-green-600 fill-green-600"/>
              </div>
              <div className="text-lg leading-8">
                <p>
                &quot;The case feels durable and I even got compliment on the design . Had the case for two and the half months now and <span className="p-0.5 text-white bg-slate-800">the image is super clear</span>,on the case i had before  , the image started fading into yellow-ish color after a couple weeks . Love it.&quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image className="rounded-full object-cover" src='/users/user-1.png' width={50} height={50} alt="img"/>
                <div className="flex flex-col">
                  <p className="font-semibold">Jony</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600"/>
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
            {/* second review */}
            <div className="flex mt-9 flex-auto flex-col gap-4 lg:pr-8 xl:pr-8">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600"/>
                <Star className="h-5 w-5 text-green-600 fill-green-600"/>
                <Star className="h-5 w-5 text-green-600 fill-green-600"/>
                <Star className="h-5 w-5 text-green-600 fill-green-600"/>
                <Star className="h-5 w-5 text-green-600 fill-green-600"/>
              </div>
              <div className="text-lg leading-8">
                <p>
                &quot;The case feels durable and I even got compliment on the design . Had the case for two and the half months now and <span className="p-0.5 text-white bg-slate-800">the image is super clear</span>,on the case i had before  , the image started fading into yellow-ish color after a couple weeks . Love it.&quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image className="rounded-full object-cover" src='/users/user-4.jpg' width={50} height={50} alt="img"/>
                <div className="flex flex-col">
                  <p className="font-semibold">Josh</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600"/>
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
        <div className="pt-16">
          <Reviews/>
        </div>
      </section>

      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">Uplaod your photo<span className="relative px-2 bg-green-600 text-white">your own case</span>{' '}  says</h2>

            </div>
          </div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <Image width={140} height={110} src="/arrow.png" className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0" alt="" />
              <div className="h-18 relative md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
              <Image width={410} height={410} src='/horse.jpg' className="rounded-md object-cover  shadow-2xl ring-1 ring-gray-900/10 w-full h-full" alt=""/>

              </div>
              <Phone className="w-60" imgSrc="/horse_phone.jpg"/>

            </div>
          </div>
          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
            <li className="w-fit">
              <Check className="h-5 w-5 text-green-600 inline mr-1.5"/>
              High Quality Silicon Element
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-green-600 inline mr-1.5"/>
              Scratch and fingureprint resistant coating
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-green-600 inline mr-1.5"/>
              wireless charging compatable
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-green-600 inline mr-1.5"/>
              5 years print warrenty
            </li>

            <div className="flex justify-center">
              <Link className={buttonVariants({size:'lg',className:'mx-auto mt-8'})} href='/configure/upload'> Create your case now <ArrowRight className='h-4 w-4 ml-1.5'/></Link>
            </div>
          </ul>

        </MaxWidthWrapper>
      </section>
    </div>
    </>
    
  );
}
