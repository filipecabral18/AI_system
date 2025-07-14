import { Button } from './components/ui/button';
import { Separator } from './components/ui/separator';
import { FileVideo, Github, Upload, Wand2 } from 'lucide-react';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './components/ui/select';
import { Slider } from './components/ui/slider';

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b ">
        <div>
          <h1 className="text-xl font-bold">A.I. System</h1>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido com ❤️{' '}
          </span>
          <Separator orientation="vertical" className="h-6" />
          <Button variant={'outline'} onClick={() => window.alert('Hello')}>
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </div>
      </div>
      <div className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4 ">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Inclua o prompt para a IA..."
            />
            <Textarea
              className="resize-none p-4 leading-relaxed"
              readOnly
              placeholder="Resultado hgerado pela IA..."
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Lembre-se: você pode utilizar a variável{' '}
            <code className="text-violet-400">{'{transcription}'}</code> no seu
            prompt para adicionar o conteúdo da transcrição do vídeo
            selecionado.
          </p>
        </div>
        <aside className="w-88 space-y-6">
          <form className="space-y-6">
            <label
              className="border flex rounded-md aspect-video cursor-point border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/8 transition-colors"
              htmlFor="video"
            >
              <FileVideo className="w-8 h-8" />
              Carregar video
            </label>
            <input
              type="file"
              id="video"
              accept="video/*"
              className="sr-only"
            />
            <Separator />
            <div className="space-y-2">
              <Label htmlFor="video-transcription">Prompt de transcrição</Label>
              <Textarea
                id="video-transcription"
                className="h-28 leading-relaxed resize-none"
                placeholder='Inclua palavras chave mencionadas no vídeo, por exemplo: "IA", "JavaScript", "React"'
              />
              <Button type="submit" className="w-full">
                Carregar vídeo
                <Upload className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </form>
          <Separator />
          <form className="space-y-6">
            <div className="space-y-2">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um prompt" />
                  <SelectContent>
                    <SelectItem value="gpt-3.5-turbo">
                      Titulo do video
                    </SelectItem>
                    <SelectItem value="gpt-4">Titulo do Youtube</SelectItem>
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>
            <Separator />

            <div className="space-y-2">
              <Label>Modelo</Label>
              <Select defaultValue="gpt-3.5-turbo" disabled>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um modelo" />
                  <SelectContent>
                    <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                    <SelectItem value="gpt-4">GPT-4</SelectItem>
                    <SelectItem value="gpt-4o">GPT-4o</SelectItem>
                  </SelectContent>
                </SelectTrigger>
              </Select>
              <span className="text-xs text-muted-foreground block italic">
                Você poderá alterar em breve
              </span>
            </div>
            <Separator />
            <div className="space-y-4">
              <Label>Temperatura</Label>
              <Select defaultValue="gpt-3.5-turbo" disabled>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um modelo" />
                  <SelectContent>
                    <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                    <SelectItem value="gpt-4">GPT-4</SelectItem>
                    <SelectItem value="gpt-4o">GPT-4o</SelectItem>
                  </SelectContent>
                </SelectTrigger>
              </Select>
              <span className="text-xs text-muted-foreground block italic leading-relaxed">
                Valores mais altos resultam em respostas mais criativas, mas
                menos precisas.
              </span>
              <Slider min={0} max={1} step={0.1} />
            </div>
            <Separator />

            <Button type="submit" className="w-full">
              Enviar prompt
              <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </div>
    </div>
  );
}
