import { View, Text, FlatList, Image } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import {images} from '../../constants';
import SearchInput from '../../components/SearchInput';
import EmptyState from '../../components/EmptyState';
import useAppwrite from '../../lib/useAppwrite';
import { searchPosts } from "../../lib/appwrite";
import VideoCard from '../../components/VideoCard';
import { useLocalSearchParams } from 'expo-router';

const Search = () => {
  const { query } = useLocalSearchParams
  const { data:posts, refetch } = useAppwrite(
    () => searchPosts(query));

console.log(query, posts)

  useEffect(() => {
    refetch()
  }, [query])

  return (
    <SafeAreaView className="bg-primary h-full">
      
        <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard video={item} />
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4">
              
                <Text className="font-pmedium text-sm text-gray-100">
                  Search Results
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  {query}
                </Text>

              <View className="mt-1.5">
                <Image
                  source={images.transparent}
                  className="w-9 h-10"
                  resizeMode='contain'
                />         
              </View>
            <View className="mt-6 mb-8">
            <SearchInput initialQuery={query} refetch={refetch}/>
            </View>

            </View>
          )}
          ListEmptyComponent={() =>(
            <EmptyState 
              title="The community is currently not posting"
              subtitle="comeback later for a new update"
            />
          )}
        />
    
    </SafeAreaView>
  )
}

export default Search