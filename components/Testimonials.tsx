import { Tweets } from "./ui/Tweets"

export const Testimonials = () => {
    return (
        <div className="min-h-screen w-full bg-primary py-20">
            <div className="container mx-auto px-4">
                <h1 className="text-background text-5xl uppercase text-center mb-16 ">Testimonials</h1>
                <div className="grid grid-cols-3 gap-4">
                    <div className="grid gap-4">
                        <Tweets 
                            icon="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                            name="Rahul Arya"
                            handle="@rahularya"
                            content="Just tried 100xCanvas, and wow! It’s like Excalidraw leveled up. So intuitive and powerful. 🎨🚀"
                            className="h-auto max-w-full rounded-lg"
                        />
                        <Tweets 
                            icon="https://i.pravatar.cc/150?u=a042581f4e29026024e"
                            name="Jane Smith"
                            handle="@jane_smith"
                            content="Just discovered the best coffee shop in town. Who's up for a caffeine adventure? Just discovered the best coffee shop in town. Who's up for a caffeine adventure? Just discovered the best coffee shop in town. Who's up for a caffeine adventure? Just discovered the best coffee shop in town. Who's up for a caffeine adventure?"
                            className="h-auto max-w-full rounded-lg"
                        /> 
                        <Tweets 
                            icon="https://i.pravatar.cc/150?u=a042581f4e29026024f"
                            name="Alex Johnson"
                            handle="@alex_j"
                            content="Tech is evolving so fast. Imagine the possibilities 10 years from now!"
                            className="h-auto max-w-full rounded-lg"
                        />
                    </div>
                    <div className="grid gap-4">
                        <Tweets 
                            icon="https://i.pravatar.cc/150?u=a042581f4e29026024g"
                            name="Emily Davis"
                            handle="@emilyd"
                            content="Hiking through the mountains this weekend was pure magic. Nature heals! Hiking through the mountains this weekend was pure magic. Nature heals! Hiking through the mountains this weekend was pure magic. Nature heals! Hiking through the mountains this weekend was pure magic. Nature heals! Hiking through the mountains this weekend was pure magic. Nature heals!"
                            className="h-auto max-w-full rounded-lg"
                        />
                        <Tweets 
                            icon="https://i.pravatar.cc/150?u=a042581f4e29026024f"
                            name="Alex Johnson"
                            handle="@alex_j"
                            content="Tech is evolving so fast. Imagine the possibilities 10 years from now!"
                            className="h-auto max-w-full rounded-lg"
                        />

                    </div>

                    <div className="grid gap-4 ">
                        <Tweets 
                            icon="https://i.pravatar.cc/150?u=a042581f4e29026024f"
                            name="Alex Johnson"
                            handle="@alex_j"
                            content="Tech is evolving so fast. Imagine the possibilities 10 years from now!"
                            className="h-auto max-w-full rounded-lg"
                        />
                        <Tweets 
                            icon="https://i.pravatar.cc/150?u=a042581f4e29026024g"
                            name="Emily Davis"
                            handle="@emilyd"
                            content="Hiking through the mountains this weekend was pure magic. Nature heals! Hiking through the mountains this weekend was pure magic. Nature heals! Hiking through the mountains this weekend was pure magic. Nature heals! Hiking through the mountains this weekend was pure magic. Nature heals! Hiking through the mountains this weekend was pure magic. Nature heals!"
                            className="h-auto max-w-full rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}