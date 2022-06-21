import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import * as React from "react";

import Layout from "@/components/layout/Layout";
import ArrowLink from "@/components/links/ArrowLink";
import ButtonLink from "@/components/links/ButtonLink";
import CustomLink from "@/components/links/CustomLink";
import UnstyledLink from "@/components/links/UnstyledLink";
import Seo from "@/components/Seo";

const Home: NextPage = () => {
  return (
    <Layout>
      <Seo />

      <main className="App">
        {/* <section className="bg-white"> */}
        <section className="">
          <div className="layout flex min-h-screen flex-col items-center justify-center text-center">
            <h1>Next.js + Tailwind CSS + TypeScript Starter</h1>
            <p className="mt-2 text-sm text-gray-800">
              A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
              Import, Seo, Link component, pre-configured with Husky{" "}
            </p>
            <p className="mt-2 text-sm text-gray-700">
              <ArrowLink href="https://github.com/theodorusclarence/ts-nextjs-tailwind-starter">
                See the repository
              </ArrowLink>
            </p>

            <ButtonLink className="mt-6" href="/components" variant="light">
              See all components
            </ButtonLink>

            <ButtonLink
              className="mt-6"
              href="/demoThemeColorhunt"
              variant="light"
            >
              See Theme ColorHunt
            </ButtonLink>

            <UnstyledLink
              href="https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ftheodorusclarence%2Fts-nextjs-tailwind-starter"
              className="mt-4"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                width="92"
                height="32"
                src="https://vercel.com/button"
                alt="Deploy with Vercel"
              />
            </UnstyledLink>

            <footer className="absolute bottom-2 text-gray-700">
              © {new Date().getFullYear()} By{" "}
              <CustomLink href="https://theodorusclarence.com?ref=tsnextstarter">
                Gem Cloud
              </CustomLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
