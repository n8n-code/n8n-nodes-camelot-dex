import type { INodeProperties } from 'n8n-workflow';

export const tokensDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					]
				}
			},
			"options": [
				{
					"name": "Get Tokens",
					"value": "Get Tokens",
					"action": "Retrieve tokens data",
					"description": "Retrieve tokens data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tokens"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /tokens",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"Get Tokens"
					]
				}
			}
		},
		{
			"displayName": "Chain Id",
			"name": "chainId",
			"description": "Chain ID of tokens data",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "chainId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"Get Tokens"
					]
				}
			}
		},
		{
			"displayName": "Addresses",
			"name": "addresses",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "addresses",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"Get Tokens"
					]
				}
			}
		},
		{
			"displayName": "Whitelisted",
			"name": "whitelisted",
			"description": "Filter whitelisted tokens",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "whitelisted",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"Get Tokens"
					]
				}
			}
		},
];
