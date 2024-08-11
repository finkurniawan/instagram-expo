import {SafeAreaView} from "react-native-safe-area-context";
import {Animated, FlatList, Image, Text, View} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from "react";
import {Feather, MaterialCommunityIcons} from "@expo/vector-icons";
import {ScrollView} from "react-native";
import {StyleScript_400Regular, useFonts} from "@expo-google-fonts/style-script";

const FEEDS_DATA: {
    username: string
    imageUrl: string
    hasActiveStory: boolean
    feed: {
        imageUrl: string
        totalLikes: number
        caption: string
        postDate: number
        totalComments: number | null
        friendLikes: {
            name: string
            imageUrl: string
        }[]
    }
}[] = [
    {
        username: "Levi Ackerman",
        imageUrl:
            "https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg",
        hasActiveStory: false,
        feed: {
            imageUrl:
                "https://images.unsplash.com/photo-1533621834623-d0b25d0b14e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFjYXRpb24lMjBtYW58ZW58MHx8MHx8fDA%3D",
            totalLikes: 10,
            friendLikes: [
                {
                    name: "Dova",
                    imageUrl:
                        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64d92a54-b206-481d-814e-de021ac31156/dfi2aq6-7d83ac2a-3da8-40da-87fa-ff3cb91c812d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0ZDkyYTU0LWIyMDYtNDgxZC04MTRlLWRlMDIxYWMzMTE1NlwvZGZpMmFxNi03ZDgzYWMyYS0zZGE4LTQwZGEtODdmYS1mZjNjYjkxYzgxMmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sUgsOyBGsFYDbc1QEV6aU-gG8h03TA5tJXOX5crnydw",
                },
                {
                    name: "Alan Walker",
                    imageUrl:
                        "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3",
                },
                {
                    name: "Oki",
                    imageUrl:
                        "https://play-lh.googleusercontent.com/KnFMQzTkrsWoyFZPDovbEGxYbrJF_37APuzIPhYCT_dAFRBKCu57sDiezvQBxoSd5s4=w240-h480-rw",
                },
            ],
            caption:
                "Berakit rakit ke hulu berenang renang ketepian, bersakit sakit dahulu bersenang senang dalam kesepian. Kerja keras, istirahat dan tidur yang cukup, dan banyak berdoa dan bersyukur.",
            totalComments: 5,
            postDate: Date.now() - 60 * 60 * 24 * 1000 * 199,
        },
    },
    {
        username: "Alan Walker",
        imageUrl:
            "https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg",
        hasActiveStory: false,
        feed: {
            imageUrl:
                "https://images.unsplash.com/photo-1533621834623-d0b25d0b14e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFjYXRpb24lMjBtYW58ZW58MHx8MHx8fDA%3D",
            totalLikes: 10,
            friendLikes: [
                {
                    name: "Dova",
                    imageUrl:
                        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64d92a54-b206-481d-814e-de021ac31156/dfi2aq6-7d83ac2a-3da8-40da-87fa-ff3cb91c812d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0ZDkyYTU0LWIyMDYtNDgxZC04MTRlLWRlMDIxYWMzMTE1NlwvZGZpMmFxNi03ZDgzYWMyYS0zZGE4LTQwZGEtODdmYS1mZjNjYjkxYzgxMmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sUgsOyBGsFYDbc1QEV6aU-gG8h03TA5tJXOX5crnydw",
                },
                {
                    name: "Levi",
                    imageUrl:
                        "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3",
                },
                {
                    name: "Oki",
                    imageUrl:
                        "https://play-lh.googleusercontent.com/KnFMQzTkrsWoyFZPDovbEGxYbrJF_37APuzIPhYCT_dAFRBKCu57sDiezvQBxoSd5s4=w240-h480-rw",
                },
            ],
            caption:
                "Berakit rakit ke hulu berenang renang ketepian, bersakit sakit dahulu bersenang senang dalam kesepian. Kerja keras, istirahat dan tidur yang cukup, dan banyak berdoa dan bersyukur.",
            totalComments: 5,
            postDate: Date.now() - 60 * 60 * 24 * 1000 * 199,
        },
    },
    {
        username: "Alan Walker",
        imageUrl:
            "https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg",
        hasActiveStory: false,
        feed: {
            imageUrl:
                "https://images.unsplash.com/photo-1533621834623-d0b25d0b14e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFjYXRpb24lMjBtYW58ZW58MHx8MHx8fDA%3D",
            totalLikes: 10,
            friendLikes: [
                {
                    name: "Dova",
                    imageUrl:
                        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64d92a54-b206-481d-814e-de021ac31156/dfi2aq6-7d83ac2a-3da8-40da-87fa-ff3cb91c812d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0ZDkyYTU0LWIyMDYtNDgxZC04MTRlLWRlMDIxYWMzMTE1NlwvZGZpMmFxNi03ZDgzYWMyYS0zZGE4LTQwZGEtODdmYS1mZjNjYjkxYzgxMmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sUgsOyBGsFYDbc1QEV6aU-gG8h03TA5tJXOX5crnydw",
                },
                {
                    name: "Levi",
                    imageUrl:
                        "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3",
                },
                {
                    name: "Oki",
                    imageUrl:
                        "https://play-lh.googleusercontent.com/KnFMQzTkrsWoyFZPDovbEGxYbrJF_37APuzIPhYCT_dAFRBKCu57sDiezvQBxoSd5s4=w240-h480-rw",
                },
            ],
            caption:
                "Berakit rakit ke hulu berenang renang ketepian, bersakit sakit dahulu bersenang senang dalam kesepian. Kerja keras, istirahat dan tidur yang cukup, dan banyak berdoa dan bersyukur.",
            totalComments: 5,
            postDate: Date.now() - 60 * 60 * 24 * 1000 * 199,
        },
    },
    {
        username: "Alan Walker",
        imageUrl:
            "https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg",
        hasActiveStory: false,
        feed: {
            imageUrl:
                "https://images.unsplash.com/photo-1533621834623-d0b25d0b14e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFjYXRpb24lMjBtYW58ZW58MHx8MHx8fDA%3D",
            totalLikes: 10,
            friendLikes: [
                {
                    name: "Dova",
                    imageUrl:
                        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64d92a54-b206-481d-814e-de021ac31156/dfi2aq6-7d83ac2a-3da8-40da-87fa-ff3cb91c812d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0ZDkyYTU0LWIyMDYtNDgxZC04MTRlLWRlMDIxYWMzMTE1NlwvZGZpMmFxNi03ZDgzYWMyYS0zZGE4LTQwZGEtODdmYS1mZjNjYjkxYzgxMmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sUgsOyBGsFYDbc1QEV6aU-gG8h03TA5tJXOX5crnydw",
                },
                {
                    name: "Levi",
                    imageUrl:
                        "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3",
                },
                {
                    name: "Oki",
                    imageUrl:
                        "https://play-lh.googleusercontent.com/KnFMQzTkrsWoyFZPDovbEGxYbrJF_37APuzIPhYCT_dAFRBKCu57sDiezvQBxoSd5s4=w240-h480-rw",
                },
            ],
            caption:
                "Berakit rakit ke hulu berenang renang ketepian, bersakit sakit dahulu bersenang senang dalam kesepian. Kerja keras, istirahat dan tidur yang cukup, dan banyak berdoa dan bersyukur.",
            totalComments: 5,
            postDate: Date.now() - 60 * 60 * 24 * 1000 * 199,
        },
    },
    {
        username: "Alan Walker",
        imageUrl:
            "https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg",
        hasActiveStory: false,
        feed: {
            imageUrl:
                "https://images.unsplash.com/photo-1533621834623-d0b25d0b14e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFjYXRpb24lMjBtYW58ZW58MHx8MHx8fDA%3D",
            totalLikes: 10,
            friendLikes: [
                {
                    name: "Dova",
                    imageUrl:
                        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64d92a54-b206-481d-814e-de021ac31156/dfi2aq6-7d83ac2a-3da8-40da-87fa-ff3cb91c812d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0ZDkyYTU0LWIyMDYtNDgxZC04MTRlLWRlMDIxYWMzMTE1NlwvZGZpMmFxNi03ZDgzYWMyYS0zZGE4LTQwZGEtODdmYS1mZjNjYjkxYzgxMmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sUgsOyBGsFYDbc1QEV6aU-gG8h03TA5tJXOX5crnydw",
                },
                {
                    name: "Levi",
                    imageUrl:
                        "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3",
                },
                {
                    name: "Oki",
                    imageUrl:
                        "https://play-lh.googleusercontent.com/KnFMQzTkrsWoyFZPDovbEGxYbrJF_37APuzIPhYCT_dAFRBKCu57sDiezvQBxoSd5s4=w240-h480-rw",
                },
            ],
            caption:
                "Berakit rakit ke hulu berenang renang ketepian, bersakit sakit dahulu bersenang senang dalam kesepian. Kerja keras, istirahat dan tidur yang cukup, dan banyak berdoa dan bersyukur.",
            totalComments: 5,
            postDate: Date.now() - 60 * 60 * 24 * 1000 * 199,
        },
    },
    {
        username: "Alan Walker",
        imageUrl:
            "https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg",
        hasActiveStory: false,
        feed: {
            imageUrl:
                "https://images.unsplash.com/photo-1533621834623-d0b25d0b14e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFjYXRpb24lMjBtYW58ZW58MHx8MHx8fDA%3D",
            totalLikes: 10,
            friendLikes: [
                {
                    name: "Dova",
                    imageUrl:
                        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64d92a54-b206-481d-814e-de021ac31156/dfi2aq6-7d83ac2a-3da8-40da-87fa-ff3cb91c812d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0ZDkyYTU0LWIyMDYtNDgxZC04MTRlLWRlMDIxYWMzMTE1NlwvZGZpMmFxNi03ZDgzYWMyYS0zZGE4LTQwZGEtODdmYS1mZjNjYjkxYzgxMmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sUgsOyBGsFYDbc1QEV6aU-gG8h03TA5tJXOX5crnydw",
                },
                {
                    name: "Levi",
                    imageUrl:
                        "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3",
                },
                {
                    name: "Oki",
                    imageUrl:
                        "https://play-lh.googleusercontent.com/KnFMQzTkrsWoyFZPDovbEGxYbrJF_37APuzIPhYCT_dAFRBKCu57sDiezvQBxoSd5s4=w240-h480-rw",
                },
            ],
            caption:
                "Berakit rakit ke hulu berenang renang ketepian, bersakit sakit dahulu bersenang senang dalam kesepian. Kerja keras, istirahat dan tidur yang cukup, dan banyak berdoa dan bersyukur.",
            totalComments: 5,
            postDate: Date.now() - 60 * 60 * 24 * 1000 * 199,
        },
    },
];

export default function HomeScreen() {
    let [fontsLoaded] = useFonts({
        StyleScript_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
                <ScrollView>
                    <View>
                        {/* Header */}
                        <View className="flex-row justify-between m-5">
                            <Text className="text-3xl font-bold"
                                  style={{fontFamily: 'StyleScript_400Regular'}}>Instagram <AntDesign name="down"
                                                                                                      size={16}
                                                                                                      color="black"/></Text>
                            <View className=' flex-row justify-between gap-4'>
                                <AntDesign name="hearto" size={24} color="black"/>
                                <Ionicons name="chatbubble-outline" size={24} color="black"/>
                            </View>
                        </View>

                        {/* Story*/}
                        <ScrollView className={"ml-5 min-h-16"}>
                            <View className={"flex-row justify-center items-center"}>
                                <FlatList horizontal={true} showsVerticalScrollIndicator={false} className=""
                                          data={Array.from({length: 50})} renderItem={({index}) => (index == 0 ? (
                                    <>
                                        {/* My Story */}
                                        <View
                                            className={"mr-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5 rounded-full "}>
                                            <View className={"p-1 bg-white rounded-full w-16 h-16 "}>
                                                <Image source={{uri: 'https://picsum.photos/80/80'}}
                                                       className="w-full h-full  rounded-full"/>
                                            </View>

                                        </View>

                                        {/*  Other  Story */}
                                        <View
                                            className={"mr-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5 rounded-full "}>
                                            <View className={"p-1 bg-white rounded-full w-16 h-16 "}>
                                                <Image source={{uri: "https://links.papareact.com/3pn"}}
                                                       className="w-full h-full  rounded-full"/>
                                            </View>

                                        </View>
                                    </>
                                ) : <View
                                    className={"mr-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5 rounded-full "}>
                                    <View className={"p-1 bg-white rounded-full w-16 h-16 "}>
                                        <Image source={{uri: "https://picsum.photos/80/80?random=" + index}}
                                               className="w-full h-full  rounded-full"/>
                                    </View>

                                </View>)
                                }/>
                            </View>
                        </ScrollView>
                        {/*Post*/}
                        <View>

                            <FlatList
                                data={FEEDS_DATA}
                                // keyExtractor={(_, index) => index}
                                renderItem={({index, item: {username, imageUrl, hasActiveStory, feed}}) => (
                                    <View className="mt-5">
                                        <View>
                                            <View className="flex-row justify-between items-center mx-5">
                                                <View className="flex-row items-center gap-5">
                                                    <View>
                                                        <Image source={{uri: imageUrl}}
                                                               className="rounded-full border-2 border-orange-300 w-10 h-10"/>
                                                    </View>
                                                    <View>
                                                        <Text className="font-bold text-black">{username}</Text>
                                                    </View>
                                                </View>
                                                <Feather name="settings" size={24} color="black"/>
                                            </View>
                                            <View className={"mt-2"}>
                                                <Image
                                                    source={{uri: "https://picsum.photos/1080/1080?random=" + index || feed.imageUrl}}
                                                    className="w-full min-h-[200px]"/>
                                            </View>

                                            <View className={"flex-row justify-between items-center m-5"}>
                                                <View className={"flex-row gap-5 items-center"}>
                                                    <AntDesign name="hearto" size={24} color="black"/>
                                                    <Ionicons name="chatbubble-outline" size={24} color="black"/>
                                                    <Ionicons name="paper-plane-outline" size={24} color="black"/>
                                                </View>
                                                <View>
                                                    <MaterialCommunityIcons name="bookmark-outline" size={24}
                                                                            color="black"/>
                                                </View>
                                            </View>
                                            <View className={"mx-5 space-y-1.5"}>
                                                <View className={"flex-row items-end mb-2"}>
                                                    <View className={"relative w-20 "}>
                                                        <Image source={{uri: feed.friendLikes[0].imageUrl}}
                                                               className="w-6 h-6 rounded-full absolute -top-5 left-10"/>
                                                        <Image source={{uri: feed.friendLikes[1].imageUrl}}
                                                               className="w-6 h-6 rounded-full absolute -top-5 left-5"/>
                                                        <Image source={{uri: feed.friendLikes[2].imageUrl}}
                                                               className="w-6 h-6 rounded-full  absolute -top-5 left-0"/>
                                                    </View>
                                                    <Text
                                                        className={""}>{`Liked by ${feed.friendLikes[0].name} and ${feed.totalLikes - 1} others`}</Text>
                                                </View>
                                                <View>
                                                    <Text className={""}>
                                                        <Text className={"font-bold"}>{`${username}`}</Text>
                                                        <Text> {`${feed.caption.substring(0, 35)}...`}
                                                            <Text className={"text-gray-500"}> more</Text></Text>
                                                    </Text>
                                                </View>
                                                <View>
                                                    <Text>View all {feed.totalComments} comments</Text>
                                                    <View className={"ml-2 space-y-1"}>
                                                        <View className={"flex-row justify-between items-center"}>
                                                            <Text>Dova have fun bro</Text>
                                                            <AntDesign name="hearto" size={10} color="black"/>
                                                        </View>
                                                        <View className={"flex-row justify-between items-center"}>
                                                            <Text>Axel love you</Text>
                                                            <AntDesign name="hearto" size={10} color="black"/>
                                                        </View>
                                                    </View>

                                                    <View>
                                                        <View className={"flex-row items-end gap-2"}>
                                                            <Image source={{uri: "https://links.papareact.com/3pn"}}
                                                                   className="w-8 h-8"/>
                                                            <Text>Add a comment....</Text>
                                                        </View>
                                                        <Text>5 hours ago</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                )}/>

                        </View>

                    </View>
                </ScrollView>
    );
}

