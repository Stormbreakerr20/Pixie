import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";
import { Upload } from "lucide-react";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";

function Mainarea() {
  return (
    <>
      <div className="grid grid-cols-4 m-5 gap-5 mt-10">
        <Card className=" col-span-3" x-chunk="dashboard-07-chunk-0">
          <CardHeader>
            <CardTitle>Socail Media post generator</CardTitle>
            <CardDescription>
              Instantly craft captivating social media posts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Choose platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Instagram</SelectItem>
                    <SelectItem value="dark">Linkedin</SelectItem>
                    <SelectItem value="system">Youtube Community</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="name">Prompt</Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  defaultValue=""
                  placeholder="Enter a prompt"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">
                  Facts you want us to know about your post
                </Label>
                <Textarea
                  id="description"
                  className="min-h-32"
                  placeholder="Enter some facts"
                />
              </div>

              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">Upload picture for reference</Label>
                <Input id="picture" type="file" accept="image/*" />
              </div>
              <div className="flex justify-end">
                <Button className="bg-blue-600 hover:bg-blue-500">
                  Generate Caption
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>Image Title</CardTitle>
            <CardDescription>
              Lipsum dolor sit amet, consectetur adipiscing elit
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-5 justify-end h-full">
              <Image
                alt="Product image"
                className="aspect-square w-full object-cover rounded-lg"
                height="300"
                src="/Me.jpg"
                width="300"
              />
              <div className="flex justify-end">
                <Button className="bg-blue-600 hover:bg-blue-500">
                  Regenerate
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default Mainarea;
