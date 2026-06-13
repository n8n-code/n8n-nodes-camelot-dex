import type { INodeProperties } from 'n8n-workflow';

export const mainTokenDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Main Token"
					]
				}
			},
			"options": [
				{
					"name": "Get Main Token",
					"value": "Get Main Token",
					"action": "Retrieve Main Token data",
					"description": "Retrieve Main Token data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/grail"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /grail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Main Token"
					],
					"operation": [
						"Get Main Token"
					]
				}
			}
		},
];
