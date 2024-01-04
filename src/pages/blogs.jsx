import React from 'react'

export default function blogs() {
    return (
        <>
            <div class="min-h-screen bg-gray-50 flex flex-col  relative overflow-hidden">
                <div class="max-w-7xl m-6">
                    <div class="relative group">
                        <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                            
                            <div class="space-y-2">
                                <p class="text-slate-800">Learn how to make a glowing gradient background!</p>
                                <a href="https://mern-stack-one-murex.vercel.app/" class="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank">Read Article →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
