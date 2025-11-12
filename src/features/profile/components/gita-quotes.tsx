import {
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { Prose } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function GitaQuotes() {
  return (
    <Panel id="gita-quote">
      <PanelHeader>
        <PanelTitle>Quote</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <Prose>
          <div className="space-y-4">
            <div>
              <p className="mb-2 text-sm font-medium text-muted-foreground">
                My Fav. Gita verse is — <b>Bg. 2.47</b>
              </p>
              <p className="text-right text-lg leading-relaxed" dir="rtl">
                कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।
                <br />
                <br />
                मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥ ४७ ॥
              </p>
            </div>
            <div>
              <p className="mb-2 text-left text-sm font-medium text-muted-foreground">
                IAST transliteration —
              </p>
              <p className="text-left font-mono text-lg leading-relaxed">
                karmaṇy evādhikāras te
                <br />
                mā phaleṣu kadācana
                <br />
                <br />
                mā karma-phala-hetur bhūr
                <br />
                mā te saṅgo &apos;stv akarmaṇi
              </p>
            </div>
            <div className="pt-2">
              <CollapsibleWithContext defaultOpen={false} asChild>
                <div>
                  <CollapsibleTrigger
                    className={cn(
                      "group/translation flex w-full items-center justify-between text-left",
                      "hover:text-foreground"
                    )}
                  >
                    <span className="text-sm font-medium text-muted-foreground group-hover/translation:text-foreground">
                      Translation
                    </span>
                    <div
                      className="shrink-0 text-muted-foreground [&_svg]:size-4"
                      aria-hidden
                    >
                      <CollapsibleChevronsIcon />
                    </div>
                  </CollapsibleTrigger>

                  <CollapsibleContent className="overflow-hidden pt-3 duration-300 data-[state=closed]:animate-collapsible-fade-up data-[state=open]:animate-collapsible-fade-down">
                    <Separator className="mb-3" />

                    <p className="text-center text-sm leading-relaxed">
                      You have a right to perform your prescribed duty, but you
                      are not entitled to the fruits of action. Never consider
                      yourself the cause of the results of your activities, and
                      never be attached to not doing your duty.
                    </p>
                  </CollapsibleContent>
                </div>
              </CollapsibleWithContext>
            </div>
          </div>
        </Prose>
      </PanelContent>
    </Panel>
  );
}
