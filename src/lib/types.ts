export interface blogType {
    id: string,
    title: string,
    date: string,
    description: string,
    author: string,
    comments: commentType[],
    image: any
}

export interface commentType {
    id: string,
    date: string,
    authorName: string,
    comment: string,
    rating: number | string
}

export interface recommendedArticleType {
    id: string,
    image: any,
    category: string,
    description: string,
    date: string
}

export interface tourGuideType {
    id: string,
    name: string,
    profilePhoto: any,
    location: string,
    rating: number
}