import connectMongoseDB from "@/app/libs/mongodb";
export async function POST(request){
    const{ title, description }=await request.json();
    await connectMongoseDB();
} 