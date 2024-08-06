import React from 'react';
import NavigationBar from '../../components/NavigationBar';
import { genPageMetadata } from '../seo';
import styles from './styles.module.scss';
import FastReadText from '../../components/FastReadText';

export const metadata = genPageMetadata({
  title: `Open Source ✍️`,
  description: `I share anything that may help others, technologies I'm using and cool things I've made`,
});

const OpenSourcePage = () => (
  <div>
    <header className="header__blog">
      <NavigationBar />
    </header>

    <div className={styles.os}>
      <div className={styles.content}>
        <h1>Open Source</h1>
        <p>
          <FastReadText
            text={`There's something magical about solving problems and helping others through their journey.`}
          />
        </p>
        <ul>
          <li>
            <a
              href="https://github.com/pragmaticivan/nestjs-otel"
              target="_blank"
            >
              <b>nestjs-otel</b>
            </a>{' '}
            - 🔭 OpenTelemetry (Tracing + Metrics) module for Nest framework
            (node.js)
          </li>
          <li>
            <a
              href="https://github.com/pragmaticivan/guia-do-trabalho-remoto"
              target="_blank"
            >
              <b>guia-do-trabalho-remoto</b>
            </a>{' '}
            - ✈️ Conjunto de informações, experiências e burocracias para poder
            trabalhar remotamente para empresas do mundo todo
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default OpenSourcePage;
