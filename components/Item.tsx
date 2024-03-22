import { Avatar, ListItem } from 'tamagui';
import { ChevronRight, MapPin } from '@tamagui/lucide-icons'
import { router } from 'expo-router'

export default function Item( { title, subtitle, imgSrc='', action } ) {

  const isImg = () => {
    if (imgSrc == '') {
      return <MapPin size='$2'/>
    } else {
      return (
        <Avatar circular size="$4">
          <Avatar.Image src={imgSrc}/>
        </Avatar>
      )
    }
  }

  const handlePress = () => {
      router.navigate(action)
  }

  return (
    <ListItem
      width={300}
      borderRadius={16}
      borderWidth='$1.5'
      hoverTheme
      pressTheme
      title= {title}
      subTitle={subtitle}
      icon={isImg()}
      iconAfter={ChevronRight}
      onPress={handlePress}
      />
  )
}