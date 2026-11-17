import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import * as M from '../src/model.mjs';
const data=JSON.parse(readFileSync(new URL('../data/fixtures.json',import.meta.url),'utf8'));
test('headline totals reconcile to source',()=>assert.deepEqual(M.metrics(data),{count:6,complete:41,total:60,percent:68,attention:3,overdue:1}));test('filter uses same source for all metrics',()=>{const rows=M.filterProjects(data,'Blocked');const m=M.metrics(rows);assert.equal(m.count,1);assert.equal(m.attention,1);assert.equal(m.percent,67);});test('empty view has zero completion',()=>assert.equal(M.metrics([]).percent,0));test('due today is not overdue',()=>assert.equal(M.metrics([{complete:0,total:1,health:'On track',due:'2026-11-17'}]).overdue,0));test('completed past-due item is not overdue',()=>assert.equal(M.metrics([{complete:1,total:1,health:'On track',due:'2026-11-10'}]).overdue,0));
