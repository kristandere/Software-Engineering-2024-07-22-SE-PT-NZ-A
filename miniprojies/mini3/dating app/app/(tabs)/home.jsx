import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import {images} from '../../constants';
import SearchInput from '../../components/SearchInput';
import Trending from '../../components/Trending';
import EmptyState from '../../components/EmptyState';
import useAppwrite from '../../lib/useAppwrite';
import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
import VideoCard from '../../components/VideoCard';
import * as Location from 'expo-location';

const Home = () => {
  const { data:posts, refetch } = useAppwrite(getAllPosts);
  const { data: latestposts } = useAppwrite(getLatestPosts);


  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      
        <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard video={item} />
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View classname="justify-between items-start flex-row mb-6">

              <View className="mt-1.5">
                <Image
                  source={images.transparent}
                  className="w-9 h-10"
                  resizeMode='contain'
                />               
              </View>

            </View>

            <SearchInput />

            <View classname="w-full flex- 1 pt-5 pb-8">
              <Text className="text-gray-100 text-lg font-pregular mb-3">
              Your Community
              </Text>

              <Trending posts={latestposts ?? []} />
            </View>
          </View>
          )}
          ListEmptyComponent={() =>(
            <EmptyState 
              title="your community is currently not posting"
              subtitle="comeback later for a new update"
            />
          )}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
        />
    
    </SafeAreaView>
  )
}

export default Home