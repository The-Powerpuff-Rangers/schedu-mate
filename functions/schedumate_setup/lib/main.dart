import 'dart:developer';

import 'package:dart_appwrite/dart_appwrite.dart';

abstract class ScheduMate {
  static const String scheduDB = 'schedudb';
  static const String usersCollection = 'users';
  static const String groupCollection = 'group';
  static const String classesCollection = 'classes';
  static const String assignmentCollection = 'assignment';
}

/// Create users Collection
Future<void> createUsers(Databases db) async {
  try {
    await db.createCollection(databaseId: ScheduMate.scheduDB, collectionId: ScheduMate.usersCollection, name: 'Users');

    Future.wait([
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.usersCollection,
          key: 'country',
          size: 255,
          xrequired: false),
      db.createDatetimeAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.usersCollection,
          key: 'datebirth',
          xrequired: false),
      db.createEmailAttribute(
          databaseId: ScheduMate.scheduDB, collectionId: ScheduMate.usersCollection, key: 'email', xrequired: false),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.usersCollection,
          key: 'firstname',
          size: 255,
          xrequired: false),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.usersCollection,
          key: 'lastname',
          size: 255,
          xrequired: false),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.usersCollection,
          key: 'gender',
          size: 10,
          xrequired: false),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.usersCollection,
          key: 'id',
          size: 255,
          xrequired: false),
      db.createIntegerAttribute(
          databaseId: ScheduMate.scheduDB, collectionId: ScheduMate.usersCollection, key: 'mobile', xrequired: false),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.usersCollection,
          key: 'program',
          size: 255,
          xrequired: false),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.usersCollection,
          key: 'term',
          size: 255,
          xrequired: false),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.usersCollection,
          key: 'university',
          size: 255,
          xrequired: false),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.usersCollection,
          key: 'year',
          size: 255,
          xrequired: false),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.usersCollection,
          key: 'college',
          size: 255,
          xrequired: false),
      db.createBooleanAttribute(
          databaseId: ScheduMate.scheduDB, collectionId: ScheduMate.usersCollection, key: 'isadmin', xrequired: false),
    ]);
  } catch (e) {
    log('UsersError: $e');
  }
}

/// Create group Collection
Future<void> createGroup(Databases db) async {
  try {
    await db.createCollection(databaseId: ScheduMate.scheduDB, collectionId: ScheduMate.groupCollection, name: 'Group');

    Future.wait([
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.groupCollection,
          key: 'groupname',
          size: 255,
          xrequired: true),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.groupCollection,
          key: 'groupdescription',
          size: 255,
          xrequired: true),
      db.createIntegerAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.groupCollection,
          key: 'calenderid',
          xrequired: true),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.groupCollection,
          key: 'groupname',
          size: 255,
          xrequired: true),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.groupCollection,
          key: 'userid',
          size: 255,
          array: true,
          xrequired: false),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.groupCollection,
          key: 'adminid',
          size: 255,
          array: true,
          xrequired: true),
    ]);
  } catch (e) {
    log('GroupError: $e');
  }
}

/// Create classes Collection
Future<void> createClasses(Databases db) async {
  try {
    await db.createCollection(
        databaseId: ScheduMate.scheduDB, collectionId: ScheduMate.classesCollection, name: 'Classes');
    Future.wait([
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.classesCollection,
          key: 'classcode',
          size: 255,
          xrequired: false),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.classesCollection,
          key: 'classroomno',
          size: 255,
          xrequired: false),
      db.createDatetimeAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.classesCollection,
          key: 'classtime',
          xrequired: false),
      db.createIntegerAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.classesCollection,
          key: 'durationhrs',
          xrequired: false),
      db.createUrlAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.classesCollection,
          key: 'classlink',
          xrequired: false),
      db.createBooleanAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.classesCollection,
          key: 'isonline',
          xdefault: false,
          xrequired: false),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.classesCollection,
          key: 'classname',
          size: 255,
          xrequired: false),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.classesCollection,
          key: 'days',
          size: 255,
          xrequired: false),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.classesCollection,
          key: 'starttime',
          size: 255,
          xrequired: false),
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.classesCollection,
          key: 'endtime',
          size: 255,
          xrequired: false),
    ]);
  } catch (e) {
    log('ClassesError: $e');
  }
}

/// Create calender Collection
Future<void> createAssignments(Databases db) async {
  try {
    await db.createCollection(
        databaseId: ScheduMate.scheduDB, collectionId: ScheduMate.assignmentCollection, name: 'Assignments Projects');
    Future.wait([
      db.createStringAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.assignmentCollection,
          key: 'groupid',
          size: 255,
          xrequired: true),
      db.createUrlAttribute(
          databaseId: ScheduMate.scheduDB,
          collectionId: ScheduMate.assignmentCollection,
          key: 'assignmentlink',
          xrequired: true)
    ]);
  } catch (e) {
    log('AssignmentsError: $e');
  }
}

void main() async {
  final Client client = Client().setEndpoint('https://cloud.appwrite.io/v1').setProject('schedumate').setKey(
      '0be105f986921b89c07487a8bb86c0a72b90dbce21150c05b03fb4cb11c3eae1a40327859824a6fe06a36be9513ecf6c78508027b243ca4a929480f565c8466078c5f4aa5fdc70e70f2a9399b85ee4ebafaf18b30d9e69bc697e9e760015604e04a0ef296eb09ca5751764f2de2aeba9555e6ce7a408ec884d3c15b71ff0fea6');

  final Databases databases = Databases(client);

  try {
    Future.wait(
        [createUsers(databases), createGroup(databases), createClasses(databases), createAssignments(databases)]);
  } catch (e) {
    throw e;
  }
}
