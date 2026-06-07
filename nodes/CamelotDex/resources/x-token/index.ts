import type { INodeProperties } from 'n8n-workflow';

export const xTokenDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"X Token"
					]
				}
			},
			"options": [
				{
					"name": "Get X Token",
					"value": "Get X Token",
					"action": "Retrieve XToken data",
					"description": "Retrieve XToken data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/xgrail"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /xgrail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"X Token"
					],
					"operation": [
						"Get X Token"
					]
				}
			}
		},
];
