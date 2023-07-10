import React from 'react';
import styles from './styles.module.scss';
import FastReadText from '../FastReadText';

const OpenSource = () => (
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
);

export default OpenSource;
