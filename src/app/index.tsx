import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
  Image,
  Button,
  Alert,
  Dimensions,
} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// 4 түрлі экранның орысша ақпараттары
const SLIDES = [
  {
    id: 1,
    title: 'Лучшие цены',
    description: 'Отслеживайте скидки и покупайте авиабилеты по самым выгодным ценам в любое время.',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135706.png',
  },
  {
    id: 2,
    title: 'Будьте в курсе',
    description: 'Получайте мгновенные push-уведомления об отмене или задержке ваших рейсов.',
    image: 'https://cdn-icons-png.flaticon.com/512/789/789397.png',
  },
  {
    id: 3,
    title: 'Удобный поиск',
    description: 'Находите самые быстрые маршруты и сравнивайте предложения сотен авиакомпаний.',
    image: 'https://cdn-icons-png.flaticon.com/512/201/201623.png',
  },
  {
    id: 4,
    title: 'Быстрое бронирование',
    description: 'Сохраняйте свои данные для покупки билетов в один клик без лишней суеты.',
    image: 'https://cdn-icons-png.flaticon.com/512/1041/1041888.png',
  },
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [inputText, setInputText] = useState('');

  // Көлденең жылжытуды бақылау функциясы
  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / (SCREEN_WIDTH - 40));
    setActiveIndex(currentIndex);
  };

  // Батырманы басқан кездегі оқиға (Қосымша тапсырма)
  const handlePress = () => {
    Alert.alert(
      'Уведомление',
      inputText
        ? `Вы ввели: "${inputText}". Спасибо!`
        : `Вы находитесь на карточке: "${SLIDES[activeIndex].title}"`
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainWrapper}>

        {/* 4 экранды көлденең жылжытуға арналған ScrollView */}
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          contentContainerStyle={styles.scrollContent}
        >
          {SLIDES.map((slide) => (
            <View key={slide.id} style={styles.card}>

              {/* Image компоненті */}
              <Image
                source={{ uri: slide.image }}
                style={styles.illustration}
                resizeMode="contain"
              />

              {/* Text - Тақырып */}
              <Text style={styles.title}>{slide.title}</Text>

              {/* Text - Сипаттама */}
              <Text style={styles.description}>{slide.description}</Text>

              {/* TextInput компоненті */}
              <TextInput
                style={styles.input}
                placeholder="Введите ваш город или email..."
                placeholderTextColor="#9CA3AF"
                value={inputText}
                onChangeText={setInputText}
              />

            </View>
          ))}
        </ScrollView>

        {/* 4 нүктелік индикатор (Активті нүкте жылжыған сайын өзгереді) */}
        <View style={styles.dotsContainer}>
          {SLIDES.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                activeIndex === index && styles.activeDot,
              ]}
            />
          ))}
        </View>

        {/* Button компоненті - Төмендегі сары батырма */}
        <View style={styles.buttonWrapper}>
          <Button
            title="Понятно, спасибо"
            color="#FCD34D"
            onPress={handlePress}
          />
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E7EB',
  },
  mainWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  scrollContent: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    width: SCREEN_WIDTH - 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginRight: 0,
  },
  illustration: {
    width: 140,
    height: 140,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#4B5563',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  input: {
    width: '100%',
    height: 44,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: '#F9FAFB',
    color: '#111827',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D1D5DB',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#F59E0B',
    width: 20,
    height: 8,
    borderRadius: 4,
  },
  buttonWrapper: {
    width: SCREEN_WIDTH - 40,
    borderRadius: 12,
    overflow: 'hidden',
  },
});