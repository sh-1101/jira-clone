import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    // NOTE: gapとは、flexコンテナの子要素間に自動的に間隔を作るプロパティ
    // margin-rightと違い、親要素で一括設定でき、最後の要素には余白が付かない
    // gap-4 = 1rem (16px) の間隔
    <div className="">
      <Input />
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="muted">Muted</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="territory">Territory</Button>
    </div>
  );
}
