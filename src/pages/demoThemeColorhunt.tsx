import clsx from "clsx";
import * as React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import { DemoChildComponent } from "@/components/themes/demoChildComponent";
import { ThemeSelector } from "@/components/themes/ThemeSelector";

export default function ComponentsPage() {
  return (
    <Layout>
      <div className="space-y-14 lg:space-y-24">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/code.png" />
        </Head>

        <main className="mx-auto mt-16 max-w-4xl antialiased">
          <DemoChildComponent></DemoChildComponent>
          <ThemeSelector></ThemeSelector>
        </main>
      </div>
    </Layout>
  );
}
