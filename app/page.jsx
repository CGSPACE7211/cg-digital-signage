import { redirect } from 'next/navigation';

export default function HomePage() {
  // 任何人只要敲主域名进正门，一脚踹进我们的极致冷冽标牌主战场
  redirect('/signage');
}
