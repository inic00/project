import Image from 'next/image'
import React from 'react'

interface IProps {
    imgUrl: any;
    altText: string;
    content: string;
}
//接收父组件传过来的参数 进行渲染

export default function Hero(props: IProps) {
  return (
    <div className='relative h-[300px] w-full'>
        <Image src={props.imgUrl}  alt={props.altText}  style={{objectFit:'cover'}}  width={300} height={300} />
        <div>{props.content}</div>
    </div>
  )
}
