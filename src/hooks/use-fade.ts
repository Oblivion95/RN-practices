import React from 'react';
import { Animated } from 'react-native';

/**
 * custom hook used to handle the transition between two values: star and end at a given timing.
 * @param start: recieves the starting point.
 * @param end: recieves the finish point.
 */

const useFade = (start: number, end: number, duration: number) => {
  const opacity = React.useRef(new Animated.Value(start)).current;

  const fadeIn = (callback?: Function) => {
    Animated.timing(
      opacity, 
      {
        toValue: end,
        duration,
        useNativeDriver: true,
      },
    )
      .start(() => callback && callback());
  };

  const fadeOut = (duration: number = 300, callback?: Function) => {
    Animated.timing(
      opacity, 
      {
        toValue: start,
        duration,
        useNativeDriver: true,
      },
    )
      .start(() => callback && callback())
  };

  return {
    opacity,
    fadeIn,
    fadeOut,
  }
}

export default useFade;