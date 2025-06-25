import { coverPhoto, DanielleMarshAvatar, KangHaerinAvatar, MirandaRachelAvatar, recommendedBlogImage1 } from "@/components/image";
import { blogType, recommendedArticleType } from "./types";

export const blogData: blogType = {
        id: "blog1",
        title: "The Ultimate Guide to Full-Body Workouts",
        date: "23/01/2025",
        description: `Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.
        
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
       
        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
       
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 

        With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.

        With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.

        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
       
        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
       
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
        
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
        
        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
        `,
        author: "Alex Carter",
        image: coverPhoto,
        comments: [
            {
                id: "comment1",
                date: "22/07/2022",
                authorName: "Kang Haerin",
                comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
                rating: 5,
            },
            {
                id: "comment1",
                date: "22/07/2022",
                authorName: "Kang Haerin",
                comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
                rating: 5,
            }
        ]
    }


export const recommendedArticles: recommendedArticleType[] = [
    {
        id:"recommended1",
        category: "Culinary",
        image: recommendedBlogImage1,
        description: "Two women in local stand are chatting during morning..",
        date: "13/06/2022"
    },
    {
        id:"recommended2",
        category: "Travel",
        image: recommendedBlogImage1,
        description: "Enjoying the sunset on Padar island together",
        date: "22/07/2022"
    },
    {
        id:"recommended3",
        category: "Travel",
        image: recommendedBlogImage1,
        description: "The lush green surroundings of the campgrounds create a..",
        date: "22/07/2022"
    }
]

export const tourGuides = [
    {
        id: "tourGuide1",
        name: "Miranda Rachel",
        profilePhoto: MirandaRachelAvatar,
        location: "Jombang, Jawa timur",
        rating: 4
    },
    {
        id: "tourGuide2",
        name: "Danielle Marsh",
        profilePhoto: DanielleMarshAvatar,
        location: "Wonosobo, Jawa ten...",
        rating: 4
    },
    {
        id: "tourGuide3",
        name: "Kang Haerin",
        profilePhoto: KangHaerinAvatar,
        location: "Bundung, Jawa brat",
        rating: 4
    }
]