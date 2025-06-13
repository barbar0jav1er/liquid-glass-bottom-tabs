import React from 'react';
import { Image, ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native';


type Item={
  id: number,
  title: string,
  description: string,
  uri: string
}

const SevenWondersList = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const sevenWonders = [
    {
      id: 1,
      title: "Great Wall of China",
      description: "Ancient fortification across northern China",
      uri: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Christ the Redeemer",
      description: "Iconic statue overlooking Rio de Janeiro",
      uri: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Machu Picchu",
      description: "Ancient Incan citadel in the Andes",
      uri: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Chichen Itza",
      description: "Maya pyramid complex in Mexico",
      uri: "https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Roman Colosseum",
      description: "Ancient amphitheater in Rome",
      uri: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Taj Mahal",
      description: "Marble mausoleum in Agra, India",
      uri: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop"
    }
  ];

  const renderImageCard = (item: Item) => (
    <View key={item.id} style={[styles.card, isDark && styles.cardDark]}>
      <Image 
        source={{ uri: item.uri }} 
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.cardContent}>
        <Text style={[styles.title, isDark && styles.titleDark]}>{item.title}</Text>
        <Text style={[styles.description, isDark && styles.descriptionDark]}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={[styles.container, isDark && styles.containerDark]} showsVerticalScrollIndicator={false}>
      <View style={[styles.header, isDark && styles.headerDark]}>
        <Text style={[styles.headerTitle, isDark && styles.headerTitleDark]}>🏛️ Six Wonders of the World</Text>
        <Text style={[styles.headerSubtitle, isDark && styles.headerSubtitleDark]}>Modern wonders chosen by millions</Text>
      </View>
      
      <View style={styles.grid}>
        {sevenWonders.map(renderImageCard)}
      </View>
      
      <View style={[styles.footer, isDark && styles.footerDark]}>
        <Text style={[styles.footerText, isDark && styles.footerTextDark]}>
          🌍 Six Wonders of the Modern World
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  containerDark: {
    backgroundColor: '#121212',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  headerDark: {
    backgroundColor: '#1e1e1e',
    borderBottomColor: '#333',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 5,
  },
  headerTitleDark: {
    color: '#ffffff',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6c757d',
  },
  headerSubtitleDark: {
    color: '#b0b0b0',
  },
  grid: {
    padding: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardDark: {
    backgroundColor: '#2a2a2a',
    shadowColor: '#fff',
    shadowOpacity: 0.05,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardContent: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#212529',
    marginBottom: 5,
  },
  titleDark: {
    color: '#ffffff',
  },
  description: {
    fontSize: 14,
    color: '#6c757d',
    lineHeight: 20,
  },
  descriptionDark: {
    color: '#b0b0b0',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
  },
  footerDark: {
    backgroundColor: '#1e1e1e',
    borderTopColor: '#333',
  },
  footerText: {
    fontSize: 16,
    color: '#6c757d',
    fontWeight: '500',
  },
  footerTextDark: {
    color: '#b0b0b0',
  },
});

export default SevenWondersList;