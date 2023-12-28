import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
 {
    heading: 'Explain something playfully',
    message: 'Use a pirate voice to explain the concepts of quantum physics in a lighthearted and playful manner.'
  },
  {
    heading: 'Compose a professional email',
    message: 'Draft a professional email introducing a new product feature to clients and stakeholders.'
  },
  {
    heading: 'Revise my writing',
    message: `Revise my writing:\n\nisn't it intrsintg how u can still rd this despit all the mistakez?`
  }
];

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Hello, I&apos;m SmartChat!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
         Welcome to SmartChat, an AI chatbot powered by GeminiProApi. This project utilizes the GeminiAPI interface and implements GitHub authentication for login. It is deployed on Vercel. We assure you that we do not collect any user information and warmly invite you to enjoy our service free of charge.
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
