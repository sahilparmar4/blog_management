import { coverPhoto, DanielleMarshAvatar, KangHaerinAvatar, MirandaRachelAvatar, recommendedBlogImage1 } from "@/components/image";
import { blogType, commentType, recommendedArticleType, relatedArticleType } from "./types";

export const blogData: blogType = {
        id: "blog1",
        title: "The Ultimate Guide to Full-Body Workouts",
        date: "23/01/2025",
        description: `
        
        <p>Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike</p>.
        
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
       
        <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.<p>
       
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>

        <blockquote>With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.</blockquote>

        <p>With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.</p>

        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
       
        <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
       
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
        
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
        
        <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean</p>
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
                id: "comment2",
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
        rating: 4.0
    },
    {
        id: "tourGuide2",
        name: "Danielle Marsh",
        profilePhoto: DanielleMarshAvatar,
        location: "Wonosobo, Jawa ten...",
        rating: 4.0
    },
    {
        id: "tourGuide3",
        name: "Kang Haerin",
        profilePhoto: KangHaerinAvatar,
        location: "Bundung, Jawa brat",
        rating: 5.0
    }
]

export const relatedArticles: relatedArticleType[] = [
    {
        id: "relatedArticles1",
        title: "The Ultimate Guide to Full-Body Workouts",
        description: "Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.",
        author: "Alex Carter"
    },
    {
        id: "relatedArticles2",
        title: "5 Tips for Better Cardio Sessions",
        description: "Improve your cardio performance with these simple yet effective techniques to maximize stamina and get the most from each workout.",
        author: "Maya Lee"
    },
    {
        id: "relatedArticles3",
        title: "Meal Prep Basics for Gym Enthusiasts",
        description: "Fuel your workouts with balanced, easy-to-prepare meals. A guide on planning, prepping, and staying consistent with nutrition.",
        author: "Jordan Smith"
    },
    {
        id: "relatedArticles4",
        title: "Building Core Strength: Exercises and Benefits",
        description: "A strong core is essential for stability and injury prevention. Learn the best exercises to enhance your core power.",
        author: "Emma Rodriguez"
    },
]

export const carouselData = [
  {
    id: "1",
    author: "Alex Carter",
    description:
      "With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
    prevTitle: "5 Tips for Better Cardio Sessions",
    nextTitle: "Meal Prep Basics for Gym Enthusiasts",
  },
  {
    id: "2",
   author: "Miranda Rachel",
    description:
      "With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
    prevTitle: "5 Tips for Better Cardio Sessions",
    nextTitle: "Meal Prep Basics for Gym Enthusiasts",
  },
];