import React from 'react';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="UserListScreen" />
      <Stack.Screen name="UserFormScreen" />
    </Stack>
  );
}
