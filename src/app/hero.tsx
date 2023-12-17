"use client";

import {
  BellAlertIcon,
  SpeakerWaveIcon,
  FilmIcon,
  ArrowPathRoundedSquareIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EyeIcon,
  AcademicCapIcon,
  PuzzlePieceIcon,
  PencilSquareIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import Link from "next/link";

function Hero() {
  return (
    <header className="mt-12 bg-white px-8">
      <div className="container mx-auto grid h-full min-h-[65vh] w-full grid-cols-1 place-items-center gap-y-10 lg:grid-cols-2 auto-cols-auto">
        <div className="row-start-2 lg:row-auto lg:-mt-40">
          <Typography
            variant="h1"
            color="red"
            className="text-3xl !leading-snug"
          >
            40% OFF
          </Typography>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-2 max-w-sm text-3xl !leading-snug lg:mb-3 lg:text-5xl"
          >
            Back-to-School Campaign
          </Typography>
          {/* <Typography
            variant="lead"
            className="mb-6 font-normal !text-gray-500 md:pr-16 xl:pr-28"
          >
            We&apos;ve got everything you need to make this school year a
            smashing success! Whether you&apos;re a student, parent, or
            educator, we&apos;ve got everything you need.
          </Typography> */}
          <Button size="lg" color="gray">
            see offers
          </Button>
        </div>
        <div className="mt-40 grid gap-6 lg:mt-0 w-auto">
          <div className="grid grid-cols-5 gap-6">
            <Link href="/today">
              <div className="-mt-16 mb-14 rounded-lg shadow-md h-36 w-28 bg-amber-300 p-3 hover:animate-wiggle">
                <BellAlertIcon className="h-6 w-6 mb-2" />
                Today&apos;s tasks<div className="bg-black h-0.5"></div>Задачі
                на сьогодні
              </div>
            </Link>

            <Link href="/audio">
              <div className="-mt-28 mb-14 rounded-lg shadow-md h-36 w-28 bg-deep-purple-500 p-3 hover:animate-wiggle">
                <SpeakerWaveIcon className="h-6 w-6 mb-2" />
                Audio <div className="bg-black h-0.5"></div> Аудіювання
              </div>
            </Link>
            <Link href="/reading">
              <div className="-mt-14 mb-14 rounded-lg shadow-md h-36 w-28 bg-cyan-200 p-3 hover:animate-wiggle">
                {" "}
                <EyeIcon className="h-6 w-6 mb-2" />
                Reading <div className="bg-black h-0.5"></div>
                Читання
              </div>
            </Link>
            <Link href="/speaking">
              <div className="-mt-20 mb-20 rounded-lg shadow-md h-36 w-28 bg-brown-200 p-3 hover:animate-wiggle">
                {" "}
                <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 mb-2" />
                Speaking
                <div className="bg-black h-0.5"></div> Розмовна практика
              </div>
            </Link>
            <Link href="/stat">
              <div className="-mt-28 mb-14 rounded-lg shadow-md h-36 w-28 bg-indigo-200 p-3 hover:animate-wiggle">
                {" "}
                <ChartBarIcon className="h-6 w-6 mb-2" />
                Statistics
                <div className="bg-black h-0.5"></div> Статистика{" "}
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-5 gap-6">
            <Link href="/home-assignments">
              <div className="-mt-16 rounded-lg shadow-md h-36 w-28 bg-lime-400 p-3 hover:animate-wiggle">
                {" "}
                <PencilSquareIcon className="h-6 w-6 mb-2" />
                Home assignments
                <div className="bg-black h-0.5"></div>
                Домашні завдання
              </div>
            </Link>
            <Link href="/video">
              <div className="-mt-28 mb-14 rounded-lg shadow-md h-36 w-28 bg-deep-orange-300 p-3 hover:animate-wiggle">
                <FilmIcon className="h-6 w-6 mb-2" />
                Video <div className="bg-black h-0.5"></div> Відео
              </div>{" "}
            </Link>
            <Link href="/vocabulary">
              <div className="-mt-14 rounded-lg shadow-md h-36 w-28 bg-light-green-500 p-3 hover:animate-wiggle">
                {" "}
                <PuzzlePieceIcon className="h-6 w-6 mb-2" />
                New words <div className="bg-black h-0.5"></div>
                Нові слова
              </div>
            </Link>
            <Link href="/grammar">
              <div className="-mt-20 rounded-lg shadow-md h-36 w-28 bg-pink-300 p-3 hover:animate-wiggle">
                {" "}
                <AcademicCapIcon className="h-6 w-6 mb-2" />
                Grammar <div className="bg-black h-0.5"></div>
                Граматика
              </div>
            </Link>
            <Link href="/revision">
              <div className="-mt-28 rounded-lg shadow-md h-36 w-28 bg-green-300 p-3 hover:animate-wiggle">
                {" "}
                <ArrowPathRoundedSquareIcon className="h-6 w-6 mb-2" />
                Revision <div className="bg-black h-0.5"></div> Повторення
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Hero;
