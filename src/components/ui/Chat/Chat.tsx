'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useChat } from 'ai/react'

const Chat = () => {
	const { input, handleInputChange, handleSubmit, messages } = useChat()

	return (
		<Card className='grid w-[400px] max-w-full grid-rows-[min-content_1fr_min-content]'>
			<CardHeader>
				<CardTitle>Chat AI</CardTitle>
				<CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
			</CardHeader>
			<CardContent>
				<ScrollArea className='h-[450px] w-full pr-2'>
					<div className='space-y-3'>
						{messages.map(({ role, id, content }) => (
							<div key={id} className='flex gap-3 text-sm text-slate-600'>
								{role === 'assistant' ? (
									<Avatar>
										<AvatarFallback>AI</AvatarFallback>
										<AvatarImage src='ai-avatar.jpg' />
									</Avatar>
								) : (
									role === 'user' && (
										<Avatar>
											<AvatarFallback>MQ</AvatarFallback>
											<AvatarImage src='https://github.com/Mirian97.png' />
										</Avatar>
									)
								)}
								<p className='mr-2 leading-relaxed'>
									<span className='block font-bold text-slate-700'>
										{role === 'assistant' ? 'AI' : 'User'}
									</span>
									{content}
								</p>
							</div>
						))}
					</div>
				</ScrollArea>
			</CardContent>
			<CardFooter>
				<form onSubmit={handleSubmit} className='flex w-full gap-x-2'>
					<Input
						placeholder='How can I help you?'
						value={input}
						onChange={handleInputChange}
					/>
					<Button type='submit'>Send</Button>
				</form>
			</CardFooter>
		</Card>
	)
}

export default Chat
