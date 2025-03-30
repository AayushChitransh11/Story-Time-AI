"use client";
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { Select } from "./ui/select";
import { Textarea } from "./ui/textarea";

function StoryWriter() {
  return (
    <div className="flex flex-col container">
      <section className="flex-1 flex flex-col border border-indigo-300 rounded p-10 space-y-2">
        <Textarea />

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="How many pages should the story be?" />
          </SelectTrigger>
          <SelectContent className="w-full">
            {Array.from({ length: 10 }, (_, i) => (
              <SelectItem key={i} value={String(i + 1)}>
                {i + 1}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </section>

      <section className="flex-1 pb-5 mt-5"></section>
    </div>
  );
}

export default StoryWriter;
