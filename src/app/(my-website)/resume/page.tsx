import config from "@payload-config";
import { ArrowLeft, Download, FileText } from "lucide-react";
import Link from "next/link";
import { getPayload } from "payload";
import { Media } from "../../../../payload-types";
import { AspectRatio } from "../../../components/ui/aspect-ratio";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";

export const revalidate = 86400;

export default async function Resume() {
  // TODO: How do we handle error or loading?

  const payload = await getPayload({ config });
  const data = await payload.findGlobal({ slug: "resume" });
  const resume = data.resume as Media;
  const resumeText = data.resumeText as Media;

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold flex items-center">
          <span className="text-primary mr-2">Resume</span>
          <span className="h-px bg-border grow ml-6"></span>
        </h1>
        <Button variant="outline" size="sm" asChild>
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>
      </div>

      <div className="max-w-5xl mx-auto">
        <Tabs defaultValue="view" className="w-full">
          <TabsList className="mb-6 w-full sm:w-auto">
            <TabsTrigger value="view" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              View Resume
            </TabsTrigger>
            <TabsTrigger value="download" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Options
            </TabsTrigger>
          </TabsList>

          <TabsContent value="view" className="mt-2">
            <Card className="border border-border">
              <CardContent className="p-1 sm:p-6">
                <div className="bg-background">
                  <AspectRatio ratio={8.5 / 11} className="bg-card">
                    <iframe
                      src={`${resume.url}#view=FitH`}
                      className="w-full h-full border-0"
                      title="Max Himmel's Resume"
                    />
                  </AspectRatio>
                  <div className="mt-4 text-center text-sm text-muted-foreground">
                    Note: If the resume doesn&apos;t load correctly, please use the download option.
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="download" className="mt-2">
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col items-center p-6 border rounded-lg transition-colors hover:bg-accent/50">
                    <FileText className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-lg font-medium mb-2">PDF Format</h3>
                    <p className="text-muted-foreground text-center mb-4">
                      High-quality document suitable for printing and sharing.
                    </p>
                    <Button className="mt-auto" asChild>
                      <a href={resume.url!} download="Max_Himmel_Resume.pdf">
                        <Download className="mr-2 h-4 w-4" /> Download PDF
                      </a>
                    </Button>
                  </div>

                  <div className="flex flex-col items-center p-6 border rounded-lg transition-colors hover:bg-accent/50">
                    <FileText className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-lg font-medium mb-2">Plain Text Format</h3>
                    <p className="text-muted-foreground text-center mb-4">
                      Text-only version for ATS systems and accessibility.
                    </p>
                    <Button variant="outline" className="mt-auto" asChild>
                      <a href={resumeText.url!} download="Max_Himmel_Resume.txt">
                        <Download className="mr-2 h-4 w-4" /> Download Text Version
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
