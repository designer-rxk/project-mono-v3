'use client';

import NextLink from "next/link";
import { ArrowRight, Gear, Palette } from "@phosphor-icons/react";
import { Typography } from "@mono/ui";

type Props = {
    title: string;
    description: string;
    href?: string;
    variant?: 'palette' | 'gear';
}

export const Card = ({ title, description, href = '/', variant = 'palette' }: Props) => {
    const Icon = variant === 'palette' ? Palette : Gear;

    return (
    <NextLink href={href} className="group border-1 border border-black text-white bg-white flex focus-visible:p-2 hover:p-2 duration-300 flex-col w-full h-fit mt-4 hover:mt-8 group-focus-visible:mt-8">
        <div className="group-hover:rounded-2xl group-focus-visible:rounded-2xl duration-300 group-hover:bg-black group-focus-visible:bg-black overflow-hidden flex flex-col justify-between p-8 gap-10 min-h-[400px]">
            <div className="flex gap-8 relative pt-4">
                <ArrowRight
                    className="size-20 text-black group-hover:text-white group-focus-visible:text-white duration-300 absolute -left-28 group-hover:left-0 group-focus-visible:left-0"
                    weight="light" 
                />
                <Icon
                    className="size-20 text-black group-hover:text-white group-focus-visible:text-white duration-300 group-hover:ml-[calc(80px+32px)] group-focus-visible:ml-[calc(80px+32px)]"
                    weight="light"
                />
            </div>
            <div className="relative">
                <h2 className="text-black group-hover:text-white group-focus-visible:text-white text-[56px] group-focus-visible:pb-20 group-hover:pb-20 duration-300">
                    {title}
                </h2>
                <p className="text-black group-focus-visible:text-white group-hover:text-white text-[24px] absolute -bottom-[calc(100%+24px)] group-focus-visible:bottom-0 group-hover:bottom-0 duration-300">
                    {description}
                </p>
            </div>
        </div>
    </NextLink>
    )
}