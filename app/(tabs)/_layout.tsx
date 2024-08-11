import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import {Entypo, Feather, FontAwesome5, MaterialCommunityIcons, Octicons} from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => (
              <Entypo name="home" size={24} color="black" />
          ),
        }}
      />
        <Tabs.Screen
            name="search"
            options={{
                title: 'Search',
                tabBarIcon: () => (
                    <Feather name="search" size={24} color="black" />
                ),
            }}
        />

        <Tabs.Screen
            name="posts"
            options={{
                title: 'Posts',
                tabBarIcon: () => (
                    <Octicons name="diff-added" size={24} color="black" />
                ),
            }}
        />

        <Tabs.Screen
            name="real"
            options={{
                title: 'Reals',
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="movie-play-outline" size={24} color="black" />
                ),
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                title: 'Profile',
                tabBarIcon: () => (
                    <FontAwesome5 name="user-circle" size={24} color="black" />
                ),
            }}
        />

    </Tabs>
  );
}
