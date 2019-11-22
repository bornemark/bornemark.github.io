import { useState, useEffect } from 'react'

export default function useTrackType(type) {
  return {
    1: 'Originals',
  }[type]
}
